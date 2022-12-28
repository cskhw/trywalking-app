<template>
  <QPageContainer>
    <!-- 홈 페이지 -->
    <QPage>
      <!-- 홈 고객 정보 배너 -->
      <QBtn @click="onClickTestBtn">테스트 요청 보내기</QBtn>
    </QPage>
  </QPageContainer>
</template>
<script setup lang="ts">
import api from "@/api/api";

const onClickTestBtn = asyncDebounce(test);

async function test() {
  const res = await api.auth.check();
  log("test response: ", res);
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/pages/home";
</style>
