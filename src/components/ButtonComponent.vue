<script setup lang="ts">
interface Props {
  type: "icon" | "text";
  icon?: any;
  withClassicBackground?: boolean;
  withMenu?: boolean;
  width?: string | number;
  height?: string | number;
}

defineProps<Props>();
</script>

<template>
  <button
    :class="[
      'button',
      {
        'button--with-background': withClassicBackground,
        'button--with-background--with-menu': withMenu,
      },
    ]"
    :style="{
      width: typeof width === 'number' ? width + 'px' : width,
      height: typeof height === 'number' ? height + 'px' : height,
    }"
  >
    <img v-if="type === 'icon'" :src="icon" class="button__icon" />
    <slot v-else />
  </button>
</template>

<style lang="scss" scoped>
.button {
  position: relative;
  background: transparent;
  padding: 0;
  border: none;
  user-select: none;
  display: flex;
  justify-content: center;
  font-family: Retro;
  font-size: 6px;
  z-index: 1;

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
      z-index: -1;
    }

    &--with-menu {
      &::after {
        content: "";
        position: absolute;
        left: -2px;
        width: 3px;
        top: 50%;
        transform: translateY(-50%);
        height: 90%;
        background: #bdced6;
        box-shadow: inset -1px -1px 0px #4a5a6b, inset 1px 1px 0px #adb5c6,
          inset 2px 2px 0px #efffff, inset -1px -1px 0px #4a5a6b,
          inset -2px -2px 0px #7b8494;
        z-index: -1;
      }
    }

    &:not(&--with-menu) {
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
  }

  &__icon {
    position: relative;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
}
</style>
