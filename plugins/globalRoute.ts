import api from "@/api/api";
import useAppStore from "@/stores/useAppStore";
import useUserStore from "@/stores/useUserStore";

async function checkAuth() {
  const appStore = useAppStore();

  const rt = sessionStorage.getItem(COOKIE_REFRESH_TOKEN);

  // 인증 체크
  if (rt) {
    // 토큰 유효성 확인
    const res = await api.auth.valid({ refreshToken: rt });

    // 토큰이 유효하지 않으면 로그인 화면으로 보냄
    if (!res) {
      alert("세션이 없음");
      return navigateTo("/signin");
    }

    return true;
  } else {
    appStore.layout = "login";
    return navigateTo("/signin");
  }
}

export default defineNuxtPlugin(() => {
  const appStore = useAppStore();
  const userStore = useUserStore();

  // 글로벌 라우터 미들웨어
  addRouteMiddleware(
    "global",
    async (to, from) => {
      log(`to: ${to.path} from: ${from.path}`);

      const logData = userStore.user?.id
        ? userStore.user?.id.toString()
        : "none";

      try {
        /**access log 보내고 콘솔 찍어줌 */
        const accessLogRes = await api.log.create({
          msg: logData,
          path: to.fullPath,
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
    },
    { global: true }
  );
});
