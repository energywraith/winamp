export type ContextMenuOption = {
  name: string;
  onClick?: (event: MouseEvent) => void;
  subOptions?: ContextMenuOption[];
  disabled?: boolean;
  class?: string;
};
