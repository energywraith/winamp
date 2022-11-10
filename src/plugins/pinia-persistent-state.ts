import { StateTree } from "@pinia/nuxt/dist/runtime/composables";
import { PiniaPluginContext } from "pinia";

function PiniaPersistentState({ options, store }: PiniaPluginContext) {
  if (options.persistentState) {
    const { storeAs: storageKey, stateKey } = options.persistentState;
    const cookie = useCookie(storageKey || store.$id);

    if (cookie.value) {
      if (stateKey) {
        store.$state[stateKey] = cookie.value;
      } else {
        store.$state = cookie.value as unknown as StateTree;
      }
    }

    store.$subscribe((_mutation, state) => {
      cookie.value = stateKey ? state[stateKey] : state;
    });
  }
}

export default defineNuxtPlugin(({ $pinia }) => {
  $pinia.use(PiniaPersistentState);
});
