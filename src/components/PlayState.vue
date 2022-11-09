<script setup lang="ts">
import type { PlayStates } from "@/types/playStates";

const appConfig = useAppConfig();
const theme = appConfig.theme;

interface Props {
  state: PlayStates;
}

defineProps<Props>();

// TODO: Add SVG icons for play/pause/stop
</script>

<template>
  <div class="play_state_icon play_state_icon--play" v-if="state === 'PLAYING'">
    <img src="~/assets/play-state-play.png" />
  </div>
  <div
    class="play_state_icon play_state_icon--pause"
    v-else-if="state === 'PAUSED'"
  >
    <img src="~/assets/play-state-pause.png" />
  </div>
  <div
    class="play_state_icon play_state_icon--stop"
    v-else-if="state === 'STOPPED'"
  >
    <img src="~/assets/play-state-stop.png" />
  </div>
</template>

<style lang="scss" scoped>
.play_state_icon {
  color: v-bind("theme?.colors.winampGreen");
  padding-left: 4px;
}
</style>
