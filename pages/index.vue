<template>
  <QPageContainer>
    <!-- 홈 페이지 -->
    <QPage>
      <!-- 홈 고객 정보 배너 -->
      <div class="row q-gutter-md q-pa-md">
        <QBtn @click="onClickTestBtn">테스트 요청 보내기</QBtn>
        <QBtn @click="$router.push('/post')">포스트</QBtn>
        <QBtn @click="onClickKafkaBtn">카프카 테스트</QBtn>

        <QCard class="home-upload-file-card">{{ image.name }}</QCard>
        <label ref="uploadImageLabelRef" for="upload-image-input">
          <QBtn @click="onClickImgUploadBtn">이미지 업로드 테스트</QBtn>
        </label>
        <!-- 이미지 업로드 히든 인풋 -->
        <input
          ref="uploadImageInputRef"
          style="display: none"
          id="upload-image-input"
          type="file"
          @change="onChangeUploadFileInput"
        />

        <!-- 로그 프로퍼티 -->
        <QInput v-model="logItem.path" />
        <QInput v-model="logItem.event" />
        <QInput v-model="logItem.url" />
        <QInput v-model="logItem.ip" />
      </div>
    </QPage>
  </QPageContainer>
</template>
<script setup lang="ts">
import api from "@/api/api";
import type { CreateLogRequest } from "@/api/schema/request";
import instance from "@/api/instance";
import { mdiConsoleNetworkOutline } from "@mdi/js";

interface Image {
  name: string;
  image?: File;
}

const route = useRoute();

/** 인풋 Ref */
const uploadImageInputRef = ref<HTMLInputElement>();
const uploadImageLabelRef = ref<HTMLLabelElement>();

const image = reactive<Image>({
  name: "업로드 해주세요.",
});

const logItem = reactive<CreateLogRequest>({
  path: route.path,
  event: "none",
  url: route.path,
  ip: "none",
});

/** 이벤트 등록 */
const onClickTestBtn = asyncDebounce(test);
const onClickKafkaBtn = async () => {
  for (let i = 1; i <= 1; i++) {
    requestKafka(i);
  }
};
const onClickImgUploadBtn = () => uploadImageLabelRef.value?.click();

// 파일 선택하면 api 호출
async function onChangeUploadFileInput(e: Event) {
  const target = e.target as HTMLInputElement;
  const file = target.files?.item(0);

  if (file) {
    image.name = file.name;
    const form = new FormData();
    form.append("image", file);
    const res = await api.test.uploadImg(form);
    if (res.status === 201) {
      alert("업로드 성공");
    } else {
      alert("업로드 실패");
    }
    target.value = "";
  } else {
    alert("다시 시도해주세요.");
  }
}

async function test() {
  const res = await api.auth.check();
  log("test response: ", res);
}

async function requestKafka(id: number) {
  try {
    const ipRes = await instance.get("https://api.ipify.org?format=json");

    logItem.event = "click";
    logItem.ip = ipRes.data.ip;

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
.home-upload-file-card {
  display: grid;
  place-content: center;
  height: 32px;
  padding: 12px;
}
</style>
