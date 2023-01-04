<template>
  <QPageContainer>
    <!-- 홈 페이지 -->
    <QPage>
      <!-- 홈 고객 정보 배너 -->
      <div class="row q-gutter-md q-pa-md">
        <QBtn @click="onClickTestBtn">테스트 요청 보내기</QBtn>
        <QBtn @click="$router.push('/post')">포스트</QBtn>
        <QBtn @click="onClickKafkaBtn">카프카 테스트</QBtn>

        <QInput v-model="logItem.id" />
        <QInput v-model="logItem.name" />
        <QInput v-model="logItem.price" />
      </div>
    </QPage>
  </QPageContainer>
</template>
<script setup lang="ts">
import api from "@/api/api";
import useUserStore from "@/stores/useUserStore";
import type { CreateLogRequest } from "@/api/schema/request";

const route = useRoute();

const userStore = useUserStore();

const logItem = reactive<CreateLogRequest>({
  msg: "test log",
  path: route.fullPath,
});

const onClickTestBtn = asyncDebounce(test);
const onClickKafkaBtn = async () => {
  for (let i = 1; i <= 10; i++) {
    requestKafka(i);
  }
};

async function test() {
  const res = await api.auth.check();
  log("test response: ", res);
}

async function requestKafka(id: number) {
  try {
    /**access log 보내고 콘솔 찍어줌 */
    const res = await api.kafka.log.createLog(logItem);

    if (res?.status === 200) {
      console.log(res);
    }
  } catch (e) {
    log("서버 에러: ", e);
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/pages/home";
</style>
