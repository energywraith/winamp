export type ContextMenuOption = {
  name: string;
  class?: string;
  onClick: (event: Event) => void;
};
