import { defineStore } from "pinia";

export const useStore = defineStore("layoutLoading", {
  state: () => ({
    loading: false,
  }),
});
