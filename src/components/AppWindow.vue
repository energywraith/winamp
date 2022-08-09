<template>
  <div class="root">
    <slot />
  </div>
</template>

<script>
import { defaultTheme } from "@/themes";

export default {
  name: "AppWindow",
  data() {
    return {
      theme: defaultTheme,
    };
  },
};
</script>

<style lang="scss" scoped>
.root {
  margin: auto;
  width: v-bind("theme.size.width");
  height: v-bind("theme.size.height");
  border: 1px solid v-bind("theme.colors.black");
}
</style>
