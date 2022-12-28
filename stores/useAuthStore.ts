import { defineStore } from "pinia";

export default defineStore("auth", {
  state: () => ({
    isLoading: false,
    isAuth: false,
  }),
  getters: {
    loading: (state) => {
      const config = useRuntimeConfig();
      log(config.public);

      return state.isLoading;
    },
  },
  actions: {
    async signin(loginForm: ILoginForm) {
      const signinRes = await this.api.auth.signin(loginForm, true);

      if (signinRes?.status === 200) {
        // 토큰 세션에 저장
        sessionStorage.setItem(COOKIE_ACCESS_TOKEN, signinRes.data.accessToken);

        await this.router.push("/");
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
