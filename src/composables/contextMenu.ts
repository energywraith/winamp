import { ref } from "vue";
import type { Ref } from "vue";
import type { ContextMenuOption } from "@/types/contextMenuOption";

const getMenuOffset = (
  menu: HTMLElement,
  isSubMenu?: boolean
): [number, number] => {
  const parentMenu = menu.parentElement?.parentElement;

  if (isSubMenu && parentMenu) {
    const parentMenu = menu.parentElement?.parentElement;

    return [parentMenu.offsetWidth, parentMenu.offsetHeight];
  }

  menu.style.visibility = "hidden";
  menu.style.display = "block";

  return [menu.offsetWidth, menu.offsetHeight];
};

const setMenuPosition = (
  menu: HTMLElement,
  menuWidth: number,
  menuHeight: number,
  left: number,
  top: number,
  direction?: "right" | "top"
) => {
  if (direction === "right") {
    menu.style.left = left - 5 + menuWidth + "px";
    menu.style.top = top - 3 + "px";

    menu.classList.add("context-menu--active");
    return;
  }

  if (menuWidth + left >= window.innerWidth) {
    menu.style.left = left - menuWidth + "px";
  } else {
    menu.style.left = left + "px";
  }

  if (direction === "top" || menuHeight + top >= window.innerHeight) {
    menu.style.top = top - menuHeight + "px";
  } else {
    menu.style.top = top + "px";
  }

  menu.classList.add("context-menu--active");
};

export const useContextMenu = (menuRef: Ref) => {
  const targetElement = ref<HTMLElement | null>(null);

  const showMenu = (
    event: MouseEvent,
    options: {
      openRelativeToOrigin?: boolean;
      direction?: "right" | "top";
      isSubMenu?: boolean;
    }
  ) => {
    setTimeout(() => {
      const menu = menuRef.value;
      if (!menu) return;

      const [menuWidth, menuHeight] = getMenuOffset(menu, options.isSubMenu);

      menu.removeAttribute("style");

      targetElement.value = event.target as HTMLElement;

      const { offsetTop, offsetLeft } = event.target as HTMLElement;

      const left = options.openRelativeToOrigin ? offsetLeft : event.pageX;
      const top = options.openRelativeToOrigin ? offsetTop : event.pageY;

      setMenuPosition(
        menu,
        menuWidth,
        menuHeight,
        left,
        top,
        options.direction
      );
    }, 1);
  };

  const hideMenu = () => {
    const menu = menuRef.value;
    if (!menu) return;

    menu.classList.remove("context-menu--active");
  };

  const onOptionSelected = (event: MouseEvent, option: ContextMenuOption) => {
    hideMenu();

    if (!option.onClick) return;
    option.onClick(event);
  };

  return { showMenu, hideMenu, onOptionSelected };
};
