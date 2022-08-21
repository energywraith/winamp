<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  withClassicBackground?: boolean;
  width: string | number;
  height: string | number;
}

defineProps<Props>();
</script>

<template>
  <button>
    <slot />
  </button>
</template>

<style lang="scss" scoped></style>
