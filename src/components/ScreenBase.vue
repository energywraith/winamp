<script setup lang="ts">
interface Props {
  withRectanglesBackground?: boolean;
}

defineProps<Props>();

const appConfig = useAppConfig();
const theme = appConfig.theme;
</script>

<template>
  <div class="screen_base">
    <div class="screen_base__background">
      <div
        class="screen_base__background__rectangles"
        v-if="withRectanglesBackground"
      ></div>
    </div>
    <div class="screen_base__content">
      <div class="screen_base__content__side_letters" v-if="$slots.sideLetters">
        <slot name="sideLetters"></slot>
      </div>
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.screen_base {
  position: relative;
  border: 1px solid #171723;
  box-shadow: 1px 1px 0px rgba(109, 109, 128, 0.75),
    inset 1px 1px 0px rgba(113, 113, 134, 0.65);

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;

    &__rectangles {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-image: radial-gradient(
        rgb(24, 23, 41) 0.75px,
        transparent 0.75px
      );
      background-size: 3px 3px;
    }
  }

  &__content {
    position: relative;
    display: flex;
    height: 100%;
    font-family: "Pixelmix";
    font-size: 7px;
    color: v-bind("theme?.colors.winampGreen");

    &__side_letters {
      color: #435166;
      text-transform: uppercase;
      width: 8px;
      word-wrap: break-word;
      font-size: 7px;
      text-align: center;
      line-height: 7px;
      user-select: none;
      // Retro font is not 100% accurate with the original one
      font-family: "Retro";
    }
  }
}
</style>
