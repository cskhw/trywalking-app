import { defineStore } from "pinia";
import type { LoginForm, SignupForm } from "./useAuthStore.d";
import useUserStore from "./useUserStore";

export default defineStore("auth", {
  state: () => ({
    isLoading: false,
    isAuth: false,
  }),
  getters: {
    loading: (state) => {
      return state.isLoading;
    },
  },
  actions: {
    async login(loginForm: LoginForm) {
      const signinRes = await this.api.auth.signin(loginForm, true);

      if (signinRes?.status === 200) {
        // 토큰 세션에 저장
        sessionStorage.setItem(ACCESS_TOKEN, signinRes.data.accessToken);

        // 유저데이터 불러오고 중분류로 이동
        await this.router.push("/category");
      } else {
        alert("아이디 혹은 비밀번호를 확인해주세요");
      }
    },

    startLoading() {
      this.isLoading = true;
    },
    endLoading() {
      this.isLoading = false;
    },
  },
});
