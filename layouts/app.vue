<template>
  <QHeader
    class="row justify-between bg-white text-black"
    height-hint="20"
    color="white"
  >
    <QToolbar>
      <QToolbarTitle> 오더히어로 검수확인서 관리자 </QToolbarTitle>
      <QBtn color="grey" round flat :icon="mdiBell"> </QBtn>
      <QBtn color="grey" round flat :icon="mdiCart"> </QBtn>
      <QBtn @click="onClickLogoutBtn">로그아웃</QBtn>
    </QToolbar>
  </QHeader>
  <slot />
  <QFooter> im footer </QFooter>
</template>
<script setup lang="ts">
import { asyncDebounce } from "@/utils/asyncDebounce";
import { mdiBell, mdiCart } from "@mdi/js";
import { debounce } from "lodash";

const router = useRouter();

const onClickLogoutBtn = debounce(logout, 150);

// 세션 지우고 로그인 화면으로 이동
function logout() {
  const rt = sessionStorage.getItem(COOKIE_REFRESH_TOKEN);
  sessionStorage.clear();
  router.push("login");
}
</script>
<style lang="scss"></style>
