import { PiniaPluginContext } from "pinia";

function PiniaLocalStorage({ options, store }: PiniaPluginContext) {
  if (options.syncWithLocalStorage) {
    const { storeAs: storageKey, stateKey } = options.syncWithLocalStorage;

    try {
      const storedValue = localStorage.getItem(storageKey);

      if (!storedValue) return;

      const storedValueParsed = JSON.parse(storedValue);

      if (stateKey) {
        store.$state[stateKey] = storedValueParsed;
      } else {
        store.$state = storedValueParsed;
      }
    } catch {
      console.log(`Could not read localStorage item ${storageKey}`);
    }

    store.$subscribe((_mutation, state) => {
      localStorage.setItem(
        storageKey,
        JSON.stringify(stateKey ? state[stateKey] : state)
      );
    });
  }
}

export default defineNuxtPlugin(({ $pinia }) => {
  $pinia.use(PiniaLocalStorage);
});
