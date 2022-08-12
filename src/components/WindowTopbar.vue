<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import DividerBar from "@/components/DividerBar.vue";
import IconButton from "@/components/IconButton.vue";
import ComponentOrPlaceholder from "@/components/ComponentOrPlaceholder.vue";

import topbarMenuIcon from "@/assets/topbar-menu-icon.svg";
import topbarMinimizeIcon from "@/assets/topbar-min-icon.svg";
import topbarMaximizeIcon from "@/assets/topbar-max-icon.svg";
import topbarCloseIcon from "@/assets/topbar-close-icon.svg";

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
      <IconButton
        class="window_topbar__button window_topbar__button--menu"
        v-if="!!$attrs.onMenuClick"
        @click="$emit('MenuClick')"
        :icon="topbarMenuIcon"
      />
    </ComponentOrPlaceholder>
    <DividerBar class="window_topbar__bar" />
    <div class="window_topbar__text">
      {{ name }}
    </div>
    <DividerBar class="window_topbar__bar" />
    <ComponentOrPlaceholder>
      <IconButton
        class="window_topbar__button"
        v-if="!!$attrs.onMinimizeClick"
        @click="$emit('MinimizeClick')"
        :icon="topbarMinimizeIcon"
      />
    </ComponentOrPlaceholder>
    <ComponentOrPlaceholder>
      <IconButton
        class="window_topbar__button"
        v-if="$attrs.onMaximizeClick"
        @click="$emit('MaximizeClick')"
        :icon="topbarMaximizeIcon"
      />
    </ComponentOrPlaceholder>
    <ComponentOrPlaceholder>
      <IconButton
        class="window_topbar__button"
        v-if="$attrs.onCloseClick"
        @click="$emit('CloseClick')"
        :icon="topbarCloseIcon"
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
    height: 100%;
    width: 9px;
    margin-left: 1px;

    &--menu {
      width: 11px;
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
    margin-right: 2px;
    user-select: none;
    display: flex;
    align-items: center;
  }

  &__bar {
    height: 7px;
  }
}
</style>
