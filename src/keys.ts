import type { InjectionKey } from "vue";
import type { Theme } from "./themes";

export const themeKey = Symbol() as InjectionKey<Theme>;
