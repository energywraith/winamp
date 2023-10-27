<script setup lang="ts">
import { usePlayerStore } from "@/stores/player";

const playerStore = usePlayerStore();

const formValues = {
  volume: ref(playerStore.volume),
};

onMounted(() => {
  watch(
    () => playerStore.volume,
    (volume) => {
      formValues.volume.value = volume;
    }
  );
});
</script>

<template>
  <InputRange
    class="range_input"
    v-model="formValues.volume"
    @input="playerStore.setVolume"
    withColoredTrack
    withCustomChangeEvent
  />
</template>

<style lang="scss" scoped>
.range_input {
  width: 58px;
}
</style>
