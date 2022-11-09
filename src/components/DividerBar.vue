<script setup lang="ts">
interface Props {
  height?: string | number;
}

withDefaults(defineProps<Props>(), {
  height: "100%",
});
</script>

<template>
  <div class="divider_bar">
    <div />
    <div />
  </div>
</template>

<style lang="scss" scoped>
.divider_bar {
  width: 100%;
  height: v-bind("height");
  display: flex;
  flex-direction: column;

  & > div {
    border: 1px solid black;
    box-shadow: 0px 0px 1px rgb(59, 59, 59);
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    &:nth-of-type(1) {
      border-bottom-width: 0;
      border-radius: 7px 7px 4px 4px;
      background: linear-gradient(
        to bottom,
        rgb(236, 206, 122),
        rgb(255, 255, 255)
      );
    }

    &:nth-of-type(2) {
      border-radius: 4px 4px 7px 7px;
      background: linear-gradient(
        to top,
        rgb(236, 206, 122),
        rgb(163, 148, 106)
      );
    }
  }
}
</style>
