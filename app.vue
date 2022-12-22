<template>
  <!-- GlobalError -->
  <NuxtErrorBoundary @error="GlobalErrorLogger">
    <!-- You use the default slot to render your content -->
    <QLayout view="hhh lpr fff">
      <NuxtLayout :name="appStore.layout">
        <NuxtPage />
      </NuxtLayout>
    </QLayout>
    <!-- 글로벌 에러 처리 -->
    <template #error="error">
      <Error :error="error" />
    </template>
  </NuxtErrorBoundary>
</template>
<script setup lang="ts">
import useAppStore from "@/stores/useAppStore";
import api from "./api/api";

const appStore = useAppStore();
const router = useRouter();

// 자동로그인 쿠키 없으면 브라우저 종료 전에 토큰 삭제
window.onbeforeunload = () => {
  if (!cookies.has(COOKIE_AUTO_LOGIN)) {
    cookies.remove(COOKIE_ACCESS_TOKEN);
    cookies.remove(COOKIE_REFRESH_TOKEN);
  }
};

// 클릭할 때 마다 세션 갱신해줌
window.onclick = async () => {
  const rt = sessionStorage.getItem(COOKIE_REFRESH_TOKEN);
  if (rt) {
    const refreshRes = await api.auth.refresh({
      refreshToken: rt,
    });

    if (refreshRes) {
      updateAt(refreshRes.data.accessToken);
    }
  }
};

// 글로벌 로거
const GlobalErrorLogger = (e: any) => {
  log(e);
};
</script>
<style lang="scss">
.app-header {
  color: black;
  background-color: white;
  .app-toolbar {
  }
}
</style>
