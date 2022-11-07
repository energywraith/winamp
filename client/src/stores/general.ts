import { defineStore } from "pinia";

export const useGeneralStore = defineStore("general", {
  state: () => ({
    isLoading: false,
  }),
  getters: {},
  actions: {
    setIsLoading(isLoading: boolean) {
      this.isLoading = isLoading;
    },
  },
});
