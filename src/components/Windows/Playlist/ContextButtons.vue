<script setup lang="ts">
import type { GetOptionsType } from "@/composables/playlistMenus";

interface Props {
  openContextMenu: (event: MouseEvent, options: GetOptionsType) => void;
}

const {
  getAddOptions,
  getRemoveOptions,
  getSelectOptions,
  getMiscellaneousOptions,
} = usePlaylistMenus();

defineProps<Props>();
</script>

<template>
  <div class="buttons">
    <WindowsPlaylistContextButton
      @click="(event: MouseEvent) => openContextMenu(event, getAddOptions)"
    >
      ADD
    </WindowsPlaylistContextButton>
    <WindowsPlaylistContextButton
      @click="(event: MouseEvent) => openContextMenu(event, getRemoveOptions)"
    >
      REM
    </WindowsPlaylistContextButton>
    <WindowsPlaylistContextButton
      @click="(event: MouseEvent) => openContextMenu(event, getSelectOptions)"
    >
      SEL
    </WindowsPlaylistContextButton>
    <WindowsPlaylistContextButton
      @click="(event: MouseEvent) => openContextMenu(event, getMiscellaneousOptions)"
    >
      MISC
    </WindowsPlaylistContextButton>
  </div>
</template>

<style lang="scss" scoped>
.buttons {
  margin-top: 6px;
  height: 20px;
  font-size: 10px;
  display: flex;
  column-gap: 6px;
}
</style>
