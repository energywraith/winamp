<script setup lang="ts">
import { provide } from "vue";
import { defaultTheme } from "@/themes";
import { themeKey } from "@/keys";
import AppWindow from "@/components/AppWindow.vue";

provide(themeKey, defaultTheme);
</script>

<template>
  <AppWindow name="Winamp">Children</AppWindow>
</template>

<style lang="scss">
@font-face {
  font-family: "Winamp";
  src: local("Winamp"),
    url(./assets/fonts/Winamp-Regular.ttf) format("truetype");
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;

  & > * {
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
}
</style>
