import { defineStore } from "pinia";

export default defineStore("user", {
  state: () => ({
    isLoading: false,
    isAuth: false,
    user: {},
  }),
  getters: {
    loading: (state) => {
      return state.isLoading;
    },
  },
  actions: {
    startLoading() {
      this.isLoading = true;
    },
    endLoading() {
      this.isLoading = false;
    },
  },
});
