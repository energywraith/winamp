<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";
import useModelValueUpdateCallback from "@/composables/modelValueUpdateCallback";

interface Props {
  modelValue: string;
  withColoredTrack?: boolean;
  withGoldenThumb?: boolean;
}

interface Emits {
  (e: "update:modelValue", value: string): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const inputValue = ref<string>("0");
const inputTrackColor = ref<string>(
  props.withColoredTrack ? "hsl(128, 100%, 35%)" : "transparent"
);

useModelValueUpdateCallback({
  value: inputValue,
  emit: emit,
  callback: (newValue) => {
    if (!props.withColoredTrack) return;

    const h = 128 - (+newValue * 128) / 100;
    inputTrackColor.value = `hsl(${h}, 100%, 35%)`;
  },
});
</script>

<template>
  <input
    type="range"
    v-model="inputValue"
    :class="{ 'with-golden-thumb': withGoldenThumb }"
  />
</template>

<style lang="scss" scoped>
input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  background: v-bind(inputTrackColor);
  outline: none;
  border-radius: 10px;
  box-shadow: 1px 1px 0px rgba(109, 109, 128, 0.75),
    inset 1px 1px 0px rgba(113, 113, 134, 0.65);

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 14px;
    height: 14px;
    border: 0;
    background: url(@/assets/input-range-thumb.svg) no-repeat center center;
    cursor: pointer;
    margin-top: 2px;

    &:active {
      filter: brightness(0.8);
    }
  }

  &::-moz-range-thumb {
    width: 14px;
    height: 14px;
    border: 0;
    background: url(@/assets/input-range-thumb.svg) no-repeat center center;
    cursor: pointer;
    margin-top: 2px;

    &:active {
      filter: brightness(0.8);
    }
  }

  &.with-golden-thumb {
    height: 9px;
    border-radius: 0;

    &::-webkit-slider-thumb {
      background: url(@/assets/input-range-thumb-gold.svg) no-repeat center
        center;
      width: 30px;
      margin-top: 5px;
    }
    &::-moz-range-thumb {
      background: url(@/assets/input-range-thumb-gold.svg) no-repeat center
        center;
      width: 30px;
    }
  }
}
</style>
