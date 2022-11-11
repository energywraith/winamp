<script setup lang="ts">
import { usePlayerStore } from "@/stores/player";
import { usePlaylistStore } from "@/stores/playlist";
import type { VNodeRef } from "vue";

import { matchYoutubeLinkRegex } from "@/utils/youtubeLinkRegex";
import { matchYoutubeIdRegex } from "@/utils/youtubeIdRegex";
import type { ContextMenuOption } from "@/types/contextMenuOption";

const songListRef = ref<VNodeRef | null>(null);
const menuRef = ref<VNodeRef | null>(null);
const contextMenuOptions = ref<ContextMenuOption[]>([]);

const playerStore = usePlayerStore();
const playlistStore = usePlaylistStore();

const playSong = (id: string) => {
  playerStore.setCurrentSongIndex(playlistStore.getSongIndex(id));
  playerStore.resume();
};

// TODO: Move options to external file
const addOptions = [
  {
    name: "Add file(s)",
    onClick: () => {},
    disabled: true,
  },
  {
    name: "Add folder",
    onClick: () => {},
    disabled: true,
  },
  {
    name: "Add URL",
    onClick: () => {
      const url = prompt("ITS TEMPORARY DONT WORRY: Input url :)");
      if (!url) return;

      if (!matchYoutubeLinkRegex(url) && !matchYoutubeIdRegex(url)) {
        alert("INVALID URL");
        return;
      }

      playlistStore.addSongToPlaylist(url);
    },
  },
];

const removeOptions = [
  {
    name: "Remove selected",
    onClick: () => {
      songListRef.value?.selectedSongs?.forEach((id: string) => {
        playlistStore.removeSongFromPlaylist(id);
      });
    },
  },
  {
    name: "Crop selected",
    onClick: () => {},
    disabled: true,
  },
  {
    name: "Clear playlist",
    onClick: playlistStore.clearPlaylist,
  },
];

const selectOptions = [
  {
    name: "Select all",
    onClick: () => songListRef.value?.selectAll(),
  },
  {
    name: "Select none",
    onClick: () => songListRef.value?.selectNone(),
  },
  {
    name: "Invert selection",
    onClick: () => songListRef.value?.invertSelect(),
  },
];

const handleClick = (event: MouseEvent, options: ContextMenuOption[]) => {
  contextMenuOptions.value = options;
  menuRef.value.showMenu(event, true);
};
</script>

<template>
  <WindowBase name="Winamp Playlist" class="playlist_window">
    <Scrollbar>
      <ScreenBase class="playlist_window__screen_base">
        <div class="playlist_window__song_list">
          <SongList
            ref="songListRef"
            :playlist="playlistStore.playlist"
            @playSong="playSong"
          />
        </div>
      </ScreenBase>
    </Scrollbar>
    <div class="playlist_window__buttons">
      <ButtonComponent
        type="text"
        :height="18"
        @click="(event: MouseEvent) => handleClick(event, addOptions)"
        withClassicBackground
        withMenu
      >
        ADD
      </ButtonComponent>
      <ButtonComponent
        type="text"
        :height="18"
        @click="(event: MouseEvent) => handleClick(event, removeOptions)"
        withClassicBackground
        withMenu
      >
        REM
      </ButtonComponent>
      <ButtonComponent
        type="text"
        :height="18"
        @click="(event: MouseEvent) => handleClick(event, selectOptions)"
        withClassicBackground
        withMenu
      >
        SEL
      </ButtonComponent>
    </div>
    <ContextMenu ref="menuRef" :options="contextMenuOptions" />
  </WindowBase>
</template>

<style lang="scss">
.playlist_window {
  &__song_list {
    width: 100%;
    height: 100%;
    min-height: 60px;
    display: flex;
    flex-direction: column;
  }

  &__buttons {
    margin-top: 6px;
    height: 20px;
    font-size: 10px;
    display: flex;
    column-gap: 6px;
  }
}

.ps {
  height: 60px;
}
</style>
