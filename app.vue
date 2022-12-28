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

const appStore = useAppStore();
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
