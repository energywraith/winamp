import { ref } from "vue";
import type { Ref } from "vue";
import type { ContextMenuOption } from "@/types/contextMenuOption";

const useContextMenu = (menuRef: Ref) => {
  const menuHeight = ref<number | null>(null);
  const menuWidth = ref<number | null>(null);
  const targetElement = ref<HTMLElement | null>(null);

  const showMenu = (event: MouseEvent, openRelativeToOrigin?: boolean) => {
    setTimeout(() => {
      const menu = menuRef.value;
      if (!menu) return;

      if (!menuWidth.value || !menuWidth.value) {
        menu.style.visibility = "hidden";
        menu.style.display = "block";

        menuWidth.value = menu.offsetWidth;
        menuHeight.value = menu.offsetHeight;

        menu.removeAttribute("style");
      }

      targetElement.value = event.target as HTMLElement;

      const { offsetTop, offsetLeft } = event.target as HTMLElement;

      const left = openRelativeToOrigin ? offsetLeft : event.pageX;
      const top = openRelativeToOrigin ? offsetTop : event.pageY;

      if ((menuWidth?.value || 0) + left >= window.innerWidth) {
        menu.style.left = left - (menuWidth?.value || 0) + 2 + "px";
      } else {
        menu.style.left = left - 2 + "px";
      }

      if (
        openRelativeToOrigin ||
        (menuHeight?.value || 0) + top >= window.innerHeight
      ) {
        menu.style.top = top - (menuHeight?.value || 0) + 2 + "px";
      } else {
        menu.style.top = top - 2 + "px";
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

export default useContextMenu;
