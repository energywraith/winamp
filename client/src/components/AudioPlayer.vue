<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import type { VNodeRef } from "vue";
import { usePlayerStore } from "@/stores/player";
import { usePlaylistStore } from "@/stores/playlist";

const playerStore = usePlayerStore();
const playlistStore = usePlaylistStore();

const audioRef = ref<VNodeRef | null>(null);
const audioURL = ref("");

onMounted(() => {
  playerStore.setPlayerRef(audioRef);

  playlistStore.clearPlaylist();

  playlistStore.addSongToPlaylist(
    "https://www.youtube.com/watch?v=oIm-GQml3ew"
  );

  playlistStore.addSongToPlaylist(
    "https://www.youtube.com/watch?v=bMT684v8YD8"
  );

  watch(
    () => playlistStore.getCurrentSongDetails,
    (newSong) => {
      if (!newSong) {
        audioURL.value = "";
        return;
      }

      audioURL.value = newSong?.playbackURL || "";

      if (audioRef.value) {
        audioRef.value.load();
      }
    }
  );

  watch(
    () => playerStore.isPlaying,
    (isPlaying) => {
      if (!audioRef.value) return;

      if (isPlaying) {
        audioRef.value.play();
        return;
      }

      audioRef.value.pause();
    }
  );

  watch(
    () => playerStore.getVolume,
    (volume) => {
      if (!audioRef.value) return;

      audioRef.value.volume = volume;
    }
  );
});

const timeUpdate = (event: Event) =>
  playerStore.setSeeking((event.target as HTMLAudioElement).currentTime);

const onDataLoaded = () => {
  if (playerStore.isPlaying) {
    audioRef.value.play();
    return;
  }

  audioRef.value.pause();
};
</script>

<template>
  <audio
    v-if="audioURL"
    ref="audioRef"
    @timeupdate="timeUpdate"
    @ended="playerStore.skip"
    @loadeddata="onDataLoaded"
  >
    <source :src="audioURL" />
  </audio>
</template>

<style lang="scss" scoped></style>
