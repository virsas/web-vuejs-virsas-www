import { defineStore } from "pinia";
import axios from "axios";

import { useStore as useLoadingStore } from "src/stores/layout/loading";
const loadingStore = useLoadingStore();

export const useStore = defineStore("outstatus", {
  state: () => ({
    vssauthApp: false,
    vssauthApi: false,
  }),
  actions: {
    async vssauthAppShow(t) {
      loadingStore.loading = true;
      try {
        await axios.get(process.env.VUE_VSSAUTH_APP + "/status/");
        this.vssauthApp = true;
        loadingStore.loading = false;
        return true;
      } catch (error) {
        this.vssauthApp = false;
        loadingStore.loading = false;
        return false;
      }
    },
    async vssauthApiShow(t) {
      loadingStore.loading = true;
      try {
        await axios.get(process.env.VUE_VSSAUTH_API + "/status/");
        this.vssauthApi = true;
        loadingStore.loading = false;
        return true;
      } catch (error) {
        this.vssauthApi = false;
        loadingStore.loading = false;
        return false;
      }
    },
  },
});
