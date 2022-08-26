<script setup lang="ts">
import { provide } from "vue";
import { defaultTheme } from "@/themes";
import { themeKey } from "@/keys";
import MainWindow from "@/components/Windows/MainWindow.vue";
import PlaylistWindow from "@/components/Windows/PlaylistWindow.vue";

provide(themeKey, defaultTheme);
</script>

<template>
  <MainWindow />
  <PlaylistWindow />
</template>

<style lang="scss">
@font-face {
  font-family: "Winamp";
  src: local("Winamp"),
    url(./assets/fonts/Winamp-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Retro";
  src: local("Retro"),
    url(./assets/fonts/Retrocomputer-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Postpixel";
  src: local("Postpixel"),
    url(./assets/fonts/Postpixel-Regular.woff) format("truetype");
}

@font-face {
  font-family: "Pixelmix";
  src: local("Pixelmix"),
    url(./assets/fonts/Pixelmix-Regular.woff) format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Pixelmix";
  src: local("Pixelmix"),
    url(./assets/fonts/Pixelmix-Bold.woff) format("truetype");
  font-weight: 700;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
}

#app {
  height: 100%;
  background: url(@/assets/citypop-bg.jpg) no-repeat center center;
  background-size: cover;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
}

.ps {
  padding-right: 14px;

  &__rail-x,
  &__rail-y {
    border: 1px solid #171723;
    box-shadow: 1px 1px 0px rgba(109, 109, 128, 0.75),
      inset 1px 1px 0px rgba(113, 113, 134, 0.65);
    opacity: 1 !important;
    width: 10px !important;

    &::hover {
      background-color: transparent !important;
    }
  }

  &__rail-x:hover,
  &__rail-y:hover,
  &__rail-x.ps--clicking,
  &__rail-y.ps--clicking {
    background-color: transparent !important;
  }

  &__thumb-x,
  &__thumb-y {
    right: -1px !important;
    width: 9px !important;
    border-radius: 1px !important;
    background: linear-gradient(
      180deg,
      #f5ebc7 0%,
      #cfbf8f 78.64%,
      #af9960 78.65%
    ) !important;
    box-shadow: inset 0px 1px 0px #755c22, inset 2px 2px 0px #dbcc9e,
      inset -2px -2px 0px #000000 !important;

    &::before {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-65%, -50%);
      width: 2px;
      height: 90%;
      background: #755c22;
      box-shadow: 0px -2px 0px #ffffff, 0px 2px 0px #af9960;
      border-radius: 1px;
    }
  }
}
</style>
