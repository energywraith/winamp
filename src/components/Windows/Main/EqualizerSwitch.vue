<script setup lang="ts">
import { useEqualizerStore } from "@/stores/equalizer";

const equalizerStore = useEqualizerStore();

const showEqualizer = ref(equalizerStore.isWindowOpen);

onMounted(() => {
  watch(showEqualizer, (value) => {
    equalizerStore.setIsWindowOpen(value);
  });
});
</script>

<template>
  <InputCheckbox
    v-model="showEqualizer"
    name="equalizer"
    label="eq"
    class="checkbox_input"
  />
</template>

<style lang="scss" scoped>
.checkbox_input {
  font-size: 6px;
  margin-top: 2px;
  margin-left: 4px;
}
</style>
