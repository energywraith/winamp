<script setup lang="ts">
import type { ContextMenuOption } from "@/types/contextMenuOption";
import type { VNodeRef } from "vue";

interface Props {
  option: ContextMenuOption;
}

const subMenuRef = ref<VNodeRef | null>(null);

const onMouseEnter = (event: MouseEvent) => {
  subMenuRef.value.showMenu(event, {
    openRelativeToOrigin: true,
    direction: "right",
    isSubMenu: true,
  });
};

const onMouseLeave = () => subMenuRef.value.hideMenu();

defineProps<Props>();
</script>

<template>
  <li
    :class="[
      option.class,
      'context-menu__item',
      { 'context-menu__item--disabled': option.disabled },
    ]"
    v-on="
      !!option.subOptions
        ? {
            mouseenter: onMouseEnter,
            mouseleave: onMouseLeave,
          }
        : {}
    "
  >
    {{ option.name }}
    <Arrow
      v-if="option.subOptions"
      direction="right"
      color="white"
      size="4"
      class="context-menu__item__arrow"
    />
    <ContextMenu
      ref="subMenuRef"
      v-if="option.subOptions"
      :options="option.subOptions"
    />
  </li>
</template>

<style lang="scss" scoped>
.context-menu {
  &__item {
    display: flex;
    align-items: center;
    color: white;
    font-family: "Tahoma";
    font-size: 12px;
    padding: 4px 32px 4px 32px;
    white-space: nowrap;
    flex-direction: column;
    display: flex;
    align-items: flex-start;

    &--disabled {
      pointer-events: none;
      opacity: 0.5;
    }

    &:not(&--disabled):hover {
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 0 1px white;
    }

    &__arrow {
      position: absolute;
      right: 6px;
    }
  }
}
</style>
