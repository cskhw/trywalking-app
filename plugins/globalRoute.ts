import api from "@/api/api";
import instance from "@/api/instance";
import useAppStore from "@/stores/useAppStore";
import useUserStore from "@/stores/useUserStore";

async function checkAuth() {
  const appStore = useAppStore();

  const at = sessionStorage.getItem(COOKIE_ACCESS_TOKEN);

  // 인증 체크
  if (at) {
    // 토큰 유효성 확인
    const res = await api.auth.valid({ accessToken: at });

    // 토큰이 유효하지 않으면 로그인 화면으로 보냄
    if (res.status !== 200) {
      alert("세션 만료");
      return navigateTo("/signin");
    }

    return true;
  } else {
    appStore.layout = "signin";
    return navigateTo("/signin");
  }
}

export default defineNuxtPlugin(() => {
  const appStore = useAppStore();
  const route = useRoute();

  // 글로벌 라우터 미들웨어
  addRouteMiddleware(
    "global",
    async (to, from) => {
      log(`to: ${to.path} from: ${from.path}`);

      try {
        /**access log 보내고 콘솔 찍어줌 */
        const accessLogRes = await api.log.createLog({
          path: route.path,
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
      if (to.path === "/signin") {
        appStore.layout = "signin";
        return true;
      } else if (to.path === "/signup") {
        appStore.layout = "signup";
        return true;
      } else {
        appStore.layout = "app";
      }

      // 인증 체크
      return await checkAuth();
    },
    { global: true }
  );
});
