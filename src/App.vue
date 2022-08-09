<template>
  <AppWindow>Children</AppWindow>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppWindow from "@/components/AppWindow.vue";

export default defineComponent({
  name: "App",
  components: {
    AppWindow,
  },
});
</script>

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
