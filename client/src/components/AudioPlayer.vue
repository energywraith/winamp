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

  playlistStore.addSongToPlaylist(
    "https://www.youtube.com/watch?v=oIm-GQml3ew"
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
    () => [playerStore.isPlaying, audioRef.value],
    ([isPlaying, audio]) => {
      if (!audio) return;

      if (isPlaying) {
        audio.play();
        return;
      }

      audio.pause();
    }
  );
});

const timeUpdate = (event: Event) =>
  playerStore.setSeeking((event.target as HTMLAudioElement).currentTime);
</script>

<template>
  <audio v-if="audioURL" ref="audioRef" @timeupdate="timeUpdate">
    <source :src="audioURL" />
  </audio>
</template>

<style lang="scss" scoped></style>
