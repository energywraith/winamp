import { ref } from "vue";
import type { Ref } from "vue";
import type { ContextMenuOption } from "@/types/contextMenuOption";

export const useContextMenu = (menuRef: Ref) => {
  const targetElement = ref<HTMLElement | null>(null);

  const showMenu = (event: MouseEvent, openRelativeToOrigin?: boolean) => {
    setTimeout(() => {
      const menu = menuRef.value;
      if (!menu) return;

      menu.style.visibility = "hidden";
      menu.style.display = "block";

      const menuWidth = menu.offsetWidth;
      const menuHeight = menu.offsetHeight;

      menu.removeAttribute("style");

      targetElement.value = event.target as HTMLElement;

      const { offsetTop, offsetLeft } = event.target as HTMLElement;

      const left = openRelativeToOrigin ? offsetLeft : event.pageX;
      const top = openRelativeToOrigin ? offsetTop : event.pageY;

      if (menuWidth + left >= window.innerWidth) {
        menu.style.left = left - menuWidth + "px";
      } else {
        menu.style.left = left + "px";
      }

      if (openRelativeToOrigin || menuHeight + top >= window.innerHeight) {
        menu.style.top = top - menuHeight + "px";
      } else {
        menu.style.top = top + "px";
      }

      menu.classList.add("context-menu--active");
    }, 1);
  };

  const hideMenu = () => {
    const menu = menuRef.value;
    if (!menu) return;

    menu.classList.remove("context-menu--active");
  };

  const onOptionSelected = (event: Event, option: ContextMenuOption) => {
    hideMenu();
    option.onClick(event);
  };

  return { showMenu, hideMenu, onOptionSelected };
};
