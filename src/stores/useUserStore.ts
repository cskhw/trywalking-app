import type { User } from "@/stores/useUserStore.d";
import { defineStore } from "pinia";
import { f } from "vitest/dist/index-5aad25c1";
import { resourceLimits } from "worker_threads";

export default defineStore("user", {
  state: () => ({
    isLoading: false,
    isAuth: false,
    user: {} as User,
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
    async getUser() {
      const at = sessionStorage.getItem(ACCESS_TOKEN);

      if (!at) {
        alert("인증 토큰이 없습니다. 로그인 해주세요!");
        return;
      }

      const res = await this.api.user.me();
      if (res.status === 200) {
        this.user = res.data;
        console.log(this.user);
      }
    },
  },
});
