import type { InjectionKey } from "vue";
import type { Theme } from "./themes";
import type { Player } from "@/types/player";

export const themeKey = Symbol() as InjectionKey<Theme>;
export const playerKey = Symbol() as InjectionKey<Player>;
