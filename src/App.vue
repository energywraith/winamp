<script setup lang="ts">
import { provide } from "vue";
import { defaultTheme } from "@/themes";
import { themeKey } from "@/keys";
import MainWindow from "@/components/MainWindow.vue";

provide(themeKey, defaultTheme);
</script>

<template>
  <MainWindow />
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
  background: linear-gradient(180deg, #3f3d69 0%, #272643 100%);
  padding: 50px;
  display: flex;
  justify-content: center;
  user-select: none;
}
</style>
