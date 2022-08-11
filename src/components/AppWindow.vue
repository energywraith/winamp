<script setup lang="ts">
import { inject } from "vue";
import { themeKey } from "@/keys";

const theme = inject(themeKey);
</script>

<template>
  <div class="root">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.root {
  margin: auto;
  width: v-bind("theme?.size.width");
  height: v-bind("theme?.size.height");
  border: 1px solid v-bind("theme?.colors.appBackground");
}
</style>
