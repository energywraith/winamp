<script setup lang="ts">
const appConfig = useAppConfig();
const theme = appConfig.theme;

interface Props {
  name?: string;
}

interface Emits {
  onMenuClick?: () => void;
  onMinimizeClick?: () => void;
  onMaximizeClick?: () => void;
  onCloseClick?: () => void;
}

withDefaults(defineProps<Props>(), {
  name: "Unknown window",
});
defineEmits<Emits>();
</script>

<template>
  <div class="window_base">
    <WindowTopbar
      :name="name"
      @menu-click="$emit('MenuClick')"
      @minimize-click="$emit('MinimizeClick')"
      @maximize-click="$emit('MaximizeClick')"
      @close-click="$emit('CloseClick')"
    />
    <div class="window_base__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.window_base {
  width: v-bind("theme?.size.width");
  height: fit-content;
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
    padding: 7px 4px 7px 8px;
  }
}
</style>
