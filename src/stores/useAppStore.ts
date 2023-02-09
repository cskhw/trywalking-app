import instance from "@/api/instance";
import { defineStore } from "pinia";

export default defineStore("app", {
  state: () => ({
    // axios interceptor id
    isLoading: false,
    isAuth: false,
    layout: "app",
    ip: "none",
    isShowModal: false,
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
