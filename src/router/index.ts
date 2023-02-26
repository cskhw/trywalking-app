import { canNavigate } from "@layouts/plugins/casl";
import { setupLayouts } from "virtual:generated-layouts";
import { createRouter, createWebHistory } from "vue-router";
import routes from "~pages";
import { isUserLoggedIn } from "./utils";
import log from "@/composable/log";
import api from "@/api/api";
import useAppStore from "@/stores/useAppStore";
import useUserStore from "@/stores/useUserStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ℹ️ We are redirecting to different pages based on role.
    // NOTE: Role is just for UI purposes. ACL is based on abilities.
    {
      path: "/",
      redirect: () => {
        return "/login";
      },
    },
    {
      path: "/user-profile",
      redirect: () => ({
        name: "pages-user-profile-tab",
        params: { tab: "profile" },
      }),
    },
    {
      path: "/account-settings",
      redirect: () => ({
        name: "pages-account-settings-tab",
        params: { tab: "account" },
      }),
    },
    ...setupLayouts(routes),
  ],
});

export const checkAuth = async () => {
  const appStore = useAppStore();
  const userStore = useUserStore();
  const at = localStorage.getItem(ACCESS_TOKEN);
  const rt = localStorage.getItem(REFRESH_TOKEN);

  // 인증 체크
  if (at && rt) {
    // 토큰 유효성 확인
    const res = await api.auth.valid({ accessToken: at, refreshToken: rt });

    // 토큰이 유효하지 않으면 로그인 화면으로 보냄
    if (res.status !== 200) {
      alert("세션 만료");

      return "/login";
    }

    await userStore.getUser();

    return true;
  } else {
    // 인증토큰 없으면 로그인으로 이동
    appStore.layout = "login";

    return "/login";
  }
};

// Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
router.beforeEach(async (to, from) => {
  const appStore = useAppStore();

  log(`to: ${to.path} from: ${from.path}`);

  try {
    /**access log 보내고 콘솔 찍어줌 */
    // api.log.createLog({
    //   path: to.path,
    //   event: "route",
    //   date: new Date().toUTCString(),
    // });
  } catch (e) {
    log("서버 에러: ", e);
  }

  /**각 페이지에서 필요한 처리해줌 */
  if (to.path === "/login") {
    appStore.layout = "login";
    return true;
  } else if (to.path === "/signup") {
    appStore.layout = "signup";
    return true;
    // 인증 필요없는 주소들은 통과
  } else if (to.path === "/register" || to.path === "/forgot-password") {
    return true;
  }

  appStore.layout = "app";

  // 인증 체크
  return await checkAuth();
});

export default router;
