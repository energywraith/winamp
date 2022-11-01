<script setup lang="ts">
import { defineProps, inject } from "vue";
import type { PlayStates } from "@/types/playStates";
import { themeKey } from "@/keys";
import PlayPNG from "@/assets/play-state-play.png";
import PausePNG from "@/assets/play-state-pause.png";
import StopPNG from "@/assets/play-state-stop.png";

const theme = inject(themeKey);

interface Props {
  state: PlayStates;
}

defineProps<Props>();

// TODO: Add SVG icons for play/pause/stop
</script>

<template>
  <div class="play_state_icon play_state_icon--play" v-if="state === 'PLAYING'">
    <img :src="PlayPNG" />
  </div>
  <div
    class="play_state_icon play_state_icon--pause"
    v-else-if="state === 'PAUSED'"
  >
    <img :src="PausePNG" />
  </div>
  <div
    class="play_state_icon play_state_icon--stop"
    v-else-if="state === 'STOPPED'"
  >
    <img :src="StopPNG" />
  </div>
</template>

<style lang="scss" scoped>
.play_state_icon {
  color: v-bind("theme?.colors.winampGreen");
  padding-left: 4px;
}
</style>
