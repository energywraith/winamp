export const useEqualizerStore = defineStore("equalizer", {
  state: () => ({
    isWindowOpen: true,
  }),
  getters: {},
  actions: {
    setIsWindowOpen(isWindowOpen: boolean) {
      this.isWindowOpen = isWindowOpen;
    },
  },
});
