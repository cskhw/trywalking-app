import { canNavigate } from "@layouts/plugins/casl";
import { setupLayouts } from "virtual:generated-layouts";
import { createRouter, createWebHistory } from "vue-router";
import routes from "~pages";
import { isUserLoggedIn } from "./utils";
import log from "@/composable/log";
import api from "@/api/api";
import useAppStore from "@/stores/useAppStore";

export const checkAuth = async () => {
  const appStore = useAppStore();
  const at = sessionStorage.getItem(COOKIE_ACCESS_TOKEN);

  // 인증 체크
  if (at) {
    // 토큰 유효성 확인
    const res = await api.auth.valid({ accessToken: at });

    // 토큰이 유효하지 않으면 로그인 화면으로 보냄
    if (res.status !== 200) {
      alert("세션 만료");

      return "/login";
    }

    return true;
  } else {
    appStore.layout = "login";

    return "/login";
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ℹ️ We are redirecting to different pages based on role.
    // NOTE: Role is just for UI purposes. ACL is based on abilities.
    {
      path: "/",
      redirect: () => {
        return "login";
      },
    },
    {
      path: "/dashboards/analytics",
      component: () => import("@/pages/dashboards/analytics.vue"),
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

// Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
router.beforeEach(async (to, from) => {
  return true;

  const appStore = useAppStore();

  log(`to: ${to.path} from: ${from.path}`);

  try {
    /**access log 보내고 콘솔 찍어줌 */
    const accessLogRes = await api.log.createLog({
      path: to.path,
      event: "route",
      date: new Date().toUTCString(),
    });
    if (accessLogRes?.status === 200) {
      log("=========== access log ==========");
      for (const props in accessLogRes.data) {
        // @ts-ignore
        log(`${props}: ${accessLogRes.data[props]}`);
      }
      log("========= access log end ========");
    }
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
  } else {
    appStore.layout = "app";
  }

  // 인증 체크
  return await checkAuth();
});

export default router;
