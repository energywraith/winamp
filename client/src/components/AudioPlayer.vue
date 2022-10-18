<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import type { VNodeRef } from "vue";
import { usePlayerStore } from "@/stores/player";

const playerStore = usePlayerStore();

const audioRef = ref<VNodeRef | null>(null);
const audioURL = ref("");

onMounted(() => {
  playerStore.setPlayerRef(audioRef);
  playerStore.play("https://www.youtube.com/watch?v=oIm-GQml3ew");

  watch(
    () => playerStore.currentSong,
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
    <source :src="playerStore.currentSong?.playbackURL" />
  </audio>
</template>

<style lang="scss" scoped></style>
