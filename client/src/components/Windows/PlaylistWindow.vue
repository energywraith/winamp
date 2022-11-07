<script setup lang="ts">
import { ref } from "vue";
import WindowBase from "@/components/WindowBase.vue";
import ScreenBase from "@/components/ScreenBase.vue";
import SongList from "@/components/SongList.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import ContextMenu from "@/components/ContextMenu.vue";
import { usePlayerStore } from "@/stores/player";
import { usePlaylistStore } from "@/stores/playlist";
import type { VNodeRef } from "vue";
import { matchYoutubeLinkRegex } from "@/utils/youtubeLinkRegex";

const menuRef = ref<VNodeRef | null>(null);

const playerStore = usePlayerStore();
const playlistStore = usePlaylistStore();

const playSong = (id: string) => {
  playerStore.setCurrentSongIndex(playlistStore.getSongIndex(id));
};

const addOptions = [
  {
    name: "Add URL",
    onClick: () => {
      const url = prompt("ITS TEMPORARY DONT WORRY: Input url :)");
      if (!url) return;

      if (!matchYoutubeLinkRegex(url)) {
        alert("INVALID URL");
        return;
      }

      playlistStore.addSongToPlaylist(url);
    },
  },
];

const handleClick = (event: MouseEvent) => menuRef.value.showMenu(event, true);
</script>

<template>
  <WindowBase name="Winamp Playlist" class="playlist_window">
    <PerfectScrollbar>
      <ScreenBase class="playlist_window__screen_base">
        <div class="playlist_window__song_list">
          <SongList :playlist="playlistStore.playlist" @playSong="playSong" />
        </div>
      </ScreenBase>
    </PerfectScrollbar>
    <div class="playlist_window__buttons">
      <ButtonComponent
        type="text"
        :height="18"
        @click="handleClick"
        withClassicBackground
        withMenu
      >
        ADD
      </ButtonComponent>
    </div>
    <ContextMenu ref="menuRef" :options="addOptions" />
  </WindowBase>
</template>

<style lang="scss">
.playlist_window {
  &__song_list {
    width: 100%;
    height: 100%;
    min-height: 60px;
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
