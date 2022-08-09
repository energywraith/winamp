<template>
  {{ user }}
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      user: "test",
    };
  },
});
</script>

<style lang="scss">
.test {
  &__2 {
    color: red;
  }
}
</style>
