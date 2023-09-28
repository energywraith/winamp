<script setup lang="ts">
import type { Ref } from "vue";

interface Props {
  modelValue: Ref<string>;
  max?: string;
  withColoredTrack?: boolean;
  withGoldenThumb?: boolean;
  withCustomChangeEvent?: boolean;
}

interface Emits {
  (e: "update:modelValue", value: string): void;
  (e: "input", value: string): void;
  (e: "change"): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const getTrackColor = (newValue: string) => {
  if (!props.withColoredTrack) return "transparent";

  const h = (+newValue * 128) / 100;
  return `hsl(${h}, 100%, 35%)`;
};

const inputTrackColor = ref<string>(getTrackColor(props.modelValue.value));

const updateTrackColor = (newValue: string) => {
  inputTrackColor.value = getTrackColor(newValue);
};

useModelValueUpdateCallback({
  value: props.modelValue,
  callback: updateTrackColor,
});

const onChange = (e: Event) => {
  if (props.withCustomChangeEvent) {
    emit("input", (e.target as HTMLInputElement).value);
    return;
  }

  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>

<template>
  <input
    type="range"
    :value="modelValue.value"
    :class="{ 'with-golden-thumb': withGoldenThumb }"
    :max="max"
    @input="onChange"
    @change="emit('change')"
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

    background: linear-gradient(
        90deg,
        #151521 15.63%,
        #302e4b 44.79%,
        #31304d 78.13%,
        #1b1b2b 100%
      ),
      #312f4c;
    box-shadow: 1px 0px 0px #59596d, -1px -1px 0px #1b1b2a, 1px -1px 0px #1b1b2a,
      1px 1px 0px #59596d, 0px 1px 0px #59596d, -1px 1px 0px #1b1b2a;

    &::-webkit-slider-thumb {
      background: url(@/assets/input-range-thumb-gold.svg) no-repeat center
        center;
      width: 32px;
      height: 32px;
      margin-top: 5px;
    }
    &::-moz-range-thumb {
      background: url(@/assets/input-range-thumb-gold.svg) no-repeat center
        center;
      width: 32px;
      height: 32px;
      margin-top: 5px;
    }
  }
}
</style>
