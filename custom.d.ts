import "pinia";

declare module "*.svg" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent;
  export default component;
}

declare module "pinia" {
  export interface DefineStoreOptionsBase<S, Store> {
    syncWithLocalStorage?: {
      storeAs: string;
      stateKey?: keyof StoreState<Store>;
    };
  }
}
