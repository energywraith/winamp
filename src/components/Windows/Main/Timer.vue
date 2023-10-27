<script setup lang="ts">
import { usePlayerStore } from "@/stores/player";
import { formatTime } from "@/utils/formatTime";
import { parseSecondsToMinutes } from "@/utils/parseSecondsToMinutes";

const playerStore = usePlayerStore();
const seekingTime = ref("00:00");

onMounted(() => {
  watch(
    () => playerStore.seeking,
    (seeking) => {
      const { minutes, seconds } = parseSecondsToMinutes(parseInt(seeking));

      seekingTime.value = formatTime({ minutes, seconds });
    }
  );
});
</script>

<template>
  <ScreenBase class="screen_base" withRectanglesBackground>
    <template #sideLetters>0AIDV</template>
    <div class="screen_base__content">
      <PlayState :state="playerStore.playState" />
      <div class="screen_base__content__timer">
        {{ seekingTime }}
      </div>
      <SoundVisualizer class="screen_base__content__visualizer" />
    </div>
  </ScreenBase>
</template>

<style lang="scss" scoped>
.screen_base {
  width: 88px;
  height: 42px;
  padding: 2px;
  box-sizing: border-box;

  &__content {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto 1fr;
    flex-grow: 1;
    color: white;

    &__timer {
      color: #00fa00;
      font-family: "PostPixel";
      margin-left: auto;
      margin-top: auto;
      font-size: 14px;
      letter-spacing: 1px;
    }

    &__visualizer {
      grid-column: 1/3;
      grid-row: 2;
    }
  }
}
</style>
