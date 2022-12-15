import api from "@/api/api";
import useAppStore from "@/stores/useAppStore";
import { mdiConsoleNetworkOutline } from "@mdi/js";

function checkAuth() {
  const appStore = useAppStore();

  // 인증 체크
  if (cookies.has(COOKIE_ACCESS_TOKEN)) {
    // 인증 토큰, 리프레시 토큰
    const at = cookies.get(COOKIE_ACCESS_TOKEN);
    const rt = cookies.get(COOKIE_REFRESH_TOKEN);
    // TODO: 세션 확인 및 토큰 발급 로직 필요
    // const res = await api.auth.refresh(rt)
    // log(res)
    return true;
  } else {
    appStore.layout = "login";
    return navigateTo("/login");
  }
}

export default defineNuxtPlugin(() => {
  const appStore = useAppStore();
  // 글로벌 라우터 미들웨어
  addRouteMiddleware(
    "global",
    async (to, from) => {
      log(`to: ${to.path} from: ${from.path}`);
      console.log(to.fullPath);

      /**access log 보내고 콘솔 */
      const accessLogRes = await api.log.create({
        path: to.fullPath,
        msg: "access log",
      });

      if (accessLogRes?.status === 200) {
        log("=========== access log ==========");
        for (const props in accessLogRes.data) {
          log(`${props}: ${accessLogRes.data[props]}`);
        }
        log("========= access log end ========");
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
      return checkAuth();
    },
    { global: true }
  );
});
