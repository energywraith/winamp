<script setup lang="ts">
type Props = {
  direction: "top" | "right" | "down" | "left";
  color: string;
  size: string;
};

const props = defineProps<Props>();

const directionClass = computed(() => {
  return `arrow--${props.direction}`;
});

const getSize = computed(() => {
  return `${props.size}px`;
});
</script>

<template>
  <div class="arrow" :class="directionClass" />
</template>

<style lang="scss" scoped>
.arrow {
  width: 0;
  height: 0;

  &--top {
    border-left: v-bind(getSize) solid transparent;
    border-right: v-bind(getSize) solid transparent;
    border-bottom: v-bind(getSize) solid v-bind(color);
  }

  &--right {
    border-top: v-bind(getSize) solid transparent;
    border-bottom: v-bind(getSize) solid transparent;
    border-left: v-bind(getSize) solid v-bind(color);
  }

  &--down {
    border-left: v-bind(getSize) solid transparent;
    border-right: v-bind(getSize) solid transparent;
    border-top: v-bind(getSize) solid v-bind(color);
  }

  &--left {
    border-top: v-bind(getSize) solid transparent;
    border-bottom: v-bind(getSize) solid transparent;
    border-right: v-bind(getSize) solid v-bind(color);
  }
}
</style>
