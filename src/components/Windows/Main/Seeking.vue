<script setup lang="ts">
import { usePlayerStore } from "@/stores/player";

const playerStore = usePlayerStore();

const formValues = {
  seeking: ref("0"),
};

onMounted(() => {
  watch(
    () => playerStore.seeking,
    (newSeeking) => {
      formValues.seeking.value = newSeeking;
    }
  );
});

const onSeekingEnd = () => {
  if (playerStore.resumeOnSeekingEnd) {
    playerStore.resume();
    playerStore.resumeOnSeekingEnd = undefined;
  }
};
</script>

<template>
  <InputRange
    class="range_input"
    v-model="formValues.seeking"
    @input="playerStore.setPlayingTime"
    @change="onSeekingEnd"
    :max="playerStore.duration"
    withGoldenThumb
    withCustomChangeEvent
  />
</template>

<style lang="scss" scoped>
.range_input {
  width: 99%;
  grid-column: 1/3;
  margin-top: 10px;
}
</style>
