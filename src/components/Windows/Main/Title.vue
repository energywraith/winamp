<script setup lang="ts">
import type { Song } from "@/types/song";
import { usePlaylistStore } from "@/stores/playlist";
import { getFullSongName } from "@/utils/getFullSongName";

const playlistStore = usePlaylistStore();

const fullSongName = ref("");
const marqueeText = useMarquee(fullSongName);

const updateSongName = (song: Song | null) => {
  fullSongName.value = getFullSongName(song);
};

onMounted(() => {
  if (playlistStore.getCurrentSongDetails) {
    updateSongName(playlistStore.getCurrentSongDetails);
  }

  watch(
    () => playlistStore.getCurrentSongDetails,
    (currentSong) => {
      updateSongName(currentSong);
    }
  );
});
</script>

<template>
  <ScreenBase class="screen_base">
    <div class="marquee">
      {{ marqueeText }}
    </div>
  </ScreenBase>
</template>

<style lang="scss" scoped>
.screen_base {
  text-transform: uppercase;
  padding: 0 2px;
  height: 14px;
  width: 100%;
  letter-spacing: 0.7px;
  filter: contrast(1);

  .marquee {
    margin-top: 2px;
    overflow: hidden;
    white-space: nowrap;
    user-select: none;
  }
}
</style>
