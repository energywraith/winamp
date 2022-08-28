<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import type { VNodeRef } from "vue";
import usePlayer from "@/composables/player";

const player = usePlayer();

const audioRef = ref<VNodeRef | null>(null);
const audioURL = ref("");

onMounted(() => {
  player.state.audioRef = audioRef;

  player.methods.play("https://www.youtube.com/watch?v=oIm-GQml3ew");

  watch(player.state.currentSong, (currentSong) => {
    audioURL.value = currentSong?.playbackURL || "";
  });
});

const timeUpdate = (event: Event) =>
  player.methods.timeUpdate((event.target as HTMLAudioElement).currentTime);
</script>

<template>
  <audio v-if="audioURL" ref="audioRef" @timeupdate="timeUpdate">
    <source :src="audioURL" />
  </audio>
</template>

<style lang="scss" scoped></style>
