<script setup lang="ts">
import { defineProps } from "vue";
import classicBackground from "@/assets/control-buttons-button.svg";

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
    <img
      class="icon_button__background"
      :src="classicBackground"
      v-if="withClassicBackground"
    />
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
    padding: 6px;
  }

  &__icon {
    position: relative;
    width: 100%;
    height: 100%;
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
