<script setup lang="ts">
import topbarMenuIcon from "~/assets/topbar-menu-icon.svg";
import topbarMinimizeIcon from "~/assets/topbar-min-icon.svg";
import topbarMaximizeIcon from "~/assets/topbar-max-icon.svg";
import topbarCloseIcon from "~/assets/topbar-close-icon.svg";

interface Props {
  name: string;
}

interface Emits {
  onMenuClick?: () => void;
  onMinimizeClick?: () => void;
  onMaximizeClick?: () => void;
  onCloseClick?: () => void;
}

defineProps<Props>();
defineEmits<Emits>();
</script>

<template>
  <nav class="window_topbar">
    <ComponentOrPlaceholder>
      <ButtonComponent
        type="icon"
        class="window_topbar__button window_topbar__button--menu"
        height="100%"
        v-if="!!$attrs.onMenuClick"
        :icon="topbarMenuIcon"
        :width="11"
        @click="$emit('MenuClick')"
      />
    </ComponentOrPlaceholder>
    <DividerBar class="window_topbar__bar" />
    <div class="window_topbar__text">
      {{ name }}
    </div>
    <DividerBar class="window_topbar__bar" />
    <ComponentOrPlaceholder>
      <ButtonComponent
        type="icon"
        class="window_topbar__button"
        height="100%"
        v-if="!!$attrs.onMinimizeClick"
        :icon="topbarMinimizeIcon"
        :width="9"
        @click="$emit('MinimizeClick')"
      />
    </ComponentOrPlaceholder>
    <ComponentOrPlaceholder>
      <ButtonComponent
        type="icon"
        class="window_topbar__button"
        height="100%"
        v-if="!!$attrs.onMaximizeClick"
        :icon="topbarMaximizeIcon"
        :width="9"
        @click="$emit('MaximizeClick')"
      />
    </ComponentOrPlaceholder>
    <ComponentOrPlaceholder>
      <ButtonComponent
        type="icon"
        class="window_topbar__button"
        height="100%"
        v-if="!!$attrs.onCloseClick"
        :icon="topbarCloseIcon"
        :width="9"
        @click="$emit('CloseClick')"
      />
    </ComponentOrPlaceholder>
  </nav>
</template>

<style lang="scss" scoped>
.window_topbar {
  display: grid;
  grid-template-columns: auto 1.17fr auto 1fr auto auto auto;
  align-items: center;
  height: 14px;
  padding: 0 2px;
  padding-right: 1px;

  &__button {
    margin-left: 1px;

    &--menu {
      margin-right: 2px;
    }
  }

  &__text {
    text-transform: uppercase;
    color: rgb(220, 220, 220);
    font-weight: bold;
    font-family: "Winamp";
    text-shadow: 0.3px 0.3px 3px black;
    font-size: 8px;
    letter-spacing: 0.45px;
    margin-left: 4px;
    margin-right: 4px;
    user-select: none;
    display: flex;
    align-items: center;
  }

  &__bar {
    height: 7px;
  }
}
</style>
