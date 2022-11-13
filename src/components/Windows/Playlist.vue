<script setup lang="ts">
import { usePlayerStore } from "@/stores/player";
import { usePlaylistStore } from "@/stores/playlist";
import type { VNodeRef } from "vue";

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

const [addOptions, removeOptions, selectOptions, miscellaneousOptions] =
  usePlaylistMenus(songListRef);

const handleClick = (event: MouseEvent, options: ContextMenuOption[]) => {
  contextMenuOptions.value = options;
  menuRef.value.showMenu(event, {
    openRelativeToOrigin: true,
    direction: "top",
  });
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
      <ButtonComponent
        type="text"
        :height="18"
        @click="(event: MouseEvent) => handleClick(event, miscellaneousOptions)"
        withClassicBackground
        withMenu
      >
        MISC
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
