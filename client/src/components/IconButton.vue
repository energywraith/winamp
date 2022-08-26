<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  icon: string;
  withClassicBackground?: boolean;
  width: string | number;
  height: string | number;
}

defineProps<Props>();
</script>

<template>
  <button
    :class="[
      'icon_button',
      { 'icon_button--with-background': withClassicBackground },
    ]"
    :style="{
      width: typeof width === 'number' ? width + 'px' : width,
      height: typeof height === 'number' ? height + 'px' : height,
    }"
  >
    <img :src="icon" class="icon_button__icon" />
  </button>
</template>

<style lang="scss" scoped>
.icon_button {
  position: relative;
  background: transparent;
  margin: 0;
  padding: 0;
  border: none;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &--with-background {
    padding: 5px;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: #bdced6;
      box-shadow: inset -1px -1px 0px #4a5a6b, inset 1px 1px 0px #adb5c6,
        inset 2px 2px 0px #efffff, inset -1px -1px 0px #4a5a6b,
        inset -2px -2px 0px #7b8494;
    }

    &:active {
      & > * {
        top: 1px;
        left: 1px;
      }

      &::before {
        box-shadow: inset 0px 0px 0px black, inset 2px 2px 0px black,
          inset 2px 2px 0px #efffff, inset -1px -1px 0px #4a5a6b,
          inset -2px -2px 0px #7b8494;
        filter: brightness(0.7);
      }
    }
  }

  &__icon {
    position: relative;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  &__background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
