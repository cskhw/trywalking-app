<template>
  <QPageContainer>
    <!-- 홈 페이지 -->
    <QPage>
      <!-- 홈 고객 정보 배너 -->
      <HomeBanner />
      무중단 테스트 4
      <QBtn @click="$router.push('login')">로그인</QBtn>
    </QPage>
  </QPageContainer>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
@import "@/assets/styles/pages/home";
</style>
