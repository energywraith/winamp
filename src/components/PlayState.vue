<script setup lang="ts">
import { defineProps, inject } from "vue";
import type { PlayStates } from "@/types/playStates";
import { themeKey } from "@/keys";

const theme = inject(themeKey);

interface Props {
  state: PlayStates;
}

defineProps<Props>();

// TODO: Add SVG/Create using CSS icons for play/pause/stop
</script>

<template>
  <div
    class="play_state_icon play_state_icon--play"
    v-if="state === 'play'"
  ></div>
  <div
    class="play_state_icon play_state_icon--pause"
    v-else-if="state === 'pause'"
  ></div>
  <div
    class="play_state_icon play_state_icon--stop"
    v-else-if="state === 'stop'"
  ></div>
</template>

<style lang="scss" scoped>
.play_state_icon {
  color: v-bind("theme?.colors.winampGreen");
}
</style>
