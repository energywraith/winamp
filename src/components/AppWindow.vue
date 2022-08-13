<script setup lang="ts">
import { inject, defineProps, withDefaults } from "vue";
import WindowTopbar from "@/components/WindowTopbar.vue";
import { themeKey } from "@/keys";

const theme = inject(themeKey);

interface Props {
  name?: string;
}

withDefaults(defineProps<Props>(), {
  name: "Unknown window",
});

const mockFunction = () => {
  console.log("TODO");
};
</script>

<template>
  <div class="app_window">
    <WindowTopbar
      :name="name"
      @menu-click="mockFunction"
      @minimize-click="mockFunction"
      @maximize-click="mockFunction"
      @close-click="mockFunction"
    />
    <div class="app_window__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app_window {
  width: v-bind("theme?.size.width");
  height: v-bind("theme?.size.height");
  border: 1px solid rgb(34, 34, 53);
  box-sizing: border-box;
  background: linear-gradient(
    90deg,
    #151521 15.63%,
    #302e4b 44.79%,
    #31304d 78.13%,
    #1b1b2b 100%
  );
  border-radius: 2px;
  display: grid;
  grid-template-rows: auto 1fr;

  &__content {
    background: linear-gradient(
      92.53deg,
      #212132 7.06%,
      #2b2a43 46.04%,
      #383759 82.14%,
      #201f31 105.83%
    );
    border: 2px solid #171723;
    box-shadow: 1px 1px 0px rgba(109, 109, 128, 0.75),
      inset 1px 1px 0px rgba(113, 113, 134, 0.65);
    box-sizing: border-box;
    margin: -2px 3px 5px 3px;
    padding: 7px 2px 7px 5px;
  }
}
</style>
