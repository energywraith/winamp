<script setup lang="ts">
import { provide } from "vue";
import { defaultTheme } from "@/themes";
import { themeKey } from "@/keys";
import AppWindow from "@/components/AppWindow.vue";

provide(themeKey, defaultTheme);
</script>

<template>
  <AppWindow>Children</AppWindow>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
