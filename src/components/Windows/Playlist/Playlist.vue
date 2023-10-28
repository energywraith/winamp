<script setup lang="ts">
import { usePlaylistStore } from "@/stores/playlist";
import type { VNodeRef } from "vue";
import type { GetOptionsType } from "@/composables/playlistMenus";

import type { ContextMenuOption } from "@/types/contextMenuOption";

const songListRef = ref<VNodeRef | null>(null);
const menuRef = ref<VNodeRef | null>(null);
const contextMenuOptions = ref<ContextMenuOption[]>([]);

const playlistStore = usePlaylistStore();

const openContextMenu = (event: MouseEvent, getOptions: GetOptionsType) => {
  contextMenuOptions.value = getOptions(songListRef);
  menuRef.value.showMenu(event, {
    openRelativeToOrigin: true,
    direction: "top",
  });
};
</script>

<template>
  <WindowBase
    name="Winamp Playlist"
    class="playlist_window"
    v-if="playlistStore.isWindowOpen"
  >
    <Scrollbar>
      <ScreenBase class="playlist_window__screen_base">
        <div class="playlist_window__song_list">
          <SongList ref="songListRef" />
        </div>
      </ScreenBase>
    </Scrollbar>
    <WindowsPlaylistContextButtons :openContextMenu="openContextMenu" />
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
}

.ps {
  height: 60px;
}
</style>
