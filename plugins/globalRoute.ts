import useAppStore from "@/stores/useAppStore";

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
    (to, from) => {
      log(`to: ${to.path} from: ${from.path}`);
      /**각 페이지에서 필요한 처리해줌 */
      if (to.path === "/login") {
        appStore.layout = "login";
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
