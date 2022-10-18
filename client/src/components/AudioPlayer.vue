<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import type { VNodeRef } from "vue";
import { usePlayerStore } from "@/stores/player";

const playerStore = usePlayerStore();

const audioRef = ref<VNodeRef | null>(null);
const audioURL = ref("");

const currentLink = ref(0);
const links = [
  "https://www.youtube.com/watch?v=oIm-GQml3ew",
  "https://www.youtube.com/watch?v=8Bm6eaIPNts",
];

onMounted(() => {
  playerStore.setPlayerRef(audioRef);
  playerStore.play(links[currentLink.value]);

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

const playOtherSong = () => {
  if (currentLink.value === 0) {
    currentLink.value = 1;
  } else {
    currentLink.value = 0;
  }

  playerStore.play(links[currentLink.value]);
};

const timeUpdate = (event: Event) =>
  playerStore.setSeeking((event.target as HTMLAudioElement).currentTime);
</script>

<template>
  <audio v-if="audioURL" ref="audioRef" @timeupdate="timeUpdate">
    <source :src="playerStore.currentSong?.playbackURL" />
  </audio>
  <button @click="playOtherSong">test</button>
</template>

<style lang="scss" scoped></style>
