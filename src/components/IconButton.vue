<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  icon: string;
}

defineProps<Props>();
</script>

<template>
  <button class="icon_button">
    <img :src="icon" />
  </button>
</template>

<style lang="scss" scoped>
.icon_button {
  position: relative;
  background: transparent;
  margin: 0;
  padding: 0;
  border: none;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
  }
}
</style>
