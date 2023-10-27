<script setup lang="ts">
import type { Song } from "@/types/song";

import { usePlayerStore } from "@/stores/player";
import { usePlaylistStore } from "@/stores/playlist";

import { getPageTitle } from "~/utils/getPageTitle";

const playerStore = usePlayerStore();
const playlistStore = usePlaylistStore();

onMounted(() => {
  watch(
    () =>
      [playerStore.isPlaying, playlistStore.getCurrentSongDetails] as [
        boolean,
        Song | null
      ],
    ([isPlaying, currentSong]) => {
      useHead({
        title: getPageTitle(isPlaying ? currentSong?.name : undefined),
      });
    }
  );
});
</script>

<template>
  <WindowBase name="Winamp" class="main_window">
    <div class="main_window__two_column">
      <WindowsMainTimer />
      <div>
        <WindowsMainTitle />
        <WindowsMainMediaInfo />
        <div class="main_window__row">
          <WindowsMainVolume />
          <WindowsMainBalance />
          <WindowsMainEqualizerSwitch />
          <WindowsMainPlaylistSwitch />
        </div>
      </div>
    </div>
    <WindowsMainSeeking />
    <WindowsMainControlButtons class="main_window__buttons" />
  </WindowBase>
</template>

<style lang="scss" scoped>
.main_window {
  display: flex;
  flex-direction: column;

  &__two_column {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    column-gap: 4px;
    font-size: 9px;
  }

  &__buttons {
    margin-top: 4px;
  }

  &__row {
    display: flex;
    align-items: center;
    margin-top: 4px;
  }
}
</style>
