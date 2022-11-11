<script setup lang="ts">
import type { VNodeRef } from "vue";
import type { ContextMenuOption } from "@/types/contextMenuOption";

interface Props {
  options: ContextMenuOption[];
}

const menuRef = ref<VNodeRef | null>(null);
const { showMenu, hideMenu, onOptionSelected } = useContextMenu(menuRef);

const onClickOutside = () => {
  hideMenu();
};

defineProps<Props>();

defineExpose({
  showMenu,
});
</script>

<template>
  <ul ref="menuRef" class="context-menu" v-click-outside="onClickOutside">
    <li
      v-for="(option, index) in options"
      :key="index"
      class="context-menu__item"
      :class="[
        option.class,
        { 'context-menu__item--disabled': option.disabled },
      ]"
      @click="(event) => onOptionSelected(event, option)"
    >
      {{ option.name }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.context-menu {
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background: linear-gradient(
    92.53deg,
    #212132 7.06%,
    #2b2a43 46.04%,
    #383759 82.14%,
    #201f31 105.83%
  );
  box-shadow: 1px 1px 0px rgba(109, 109, 128, 0.75),
    inset 1px 1px 0px rgba(113, 113, 134, 0.65), 1px 1px 3px rgb(36, 36, 36);
  padding: 3px;

  &::before {
    content: "";
    position: absolute;
    width: 1px;
    height: calc(100% - 7px);
    left: 26px;
    top: 3px;
    z-index: 11;
    box-shadow: 1px 1px 0px rgba(109, 109, 128, 0.75);
  }

  &--active {
    display: block;
  }

  &__item {
    display: flex;
    align-items: center;
    color: white;
    font-family: "Tahoma";
    font-size: 12px;
    padding: 3px 16px 3px 32px;

    &--disabled {
      pointer-events: none;
      opacity: 0.5;
    }

    &:not(&--disabled):hover {
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 0 1px white;
    }
  }
}
</style>
