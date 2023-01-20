<template>
  <QPageContainer>
    <QLayout>
      <!-- 홈 페이지 -->
      <QPage>
        <!-- 홈 고객 정보 배너 -->
        <div class="row q-gutter-md q-pa-md">
          <QBtn @click="onClickTestBtn">테스트 요청 보내기</QBtn>
          <QBtn @click="$router.push('/post')">포스트</QBtn>
          <QBtn @click="onClickKafkaBtn">카프카 테스트</QBtn>

          <QCard class="home-upload-file-card">{{ image.name }}</QCard>

          <QBtn @click="onClickImgUploadBtn">이미지 업로드 테스트</QBtn>
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

          <!-- 파일 쓰기 -->

          <QBtn @click="onClickFileWriteBtn">파일 쓰기</QBtn>

          <!-- 파일 텍스트 -->
          <QInput v-model="fileStr" />
        </div>
      </QPage>
    </QLayout>
  </QPageContainer>
</template>
<script setup lang="ts">
import api from "@/api/api";
import type { CreateLogRequest } from "@/api/schema/request";
import useAppStore from "@/stores/useAppStore";

interface Image {
  name: string;
  image?: File;
}

const route = useRoute();

const appStore = useAppStore();

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
  date: new Date().toUTCString(),
});

const fileStr = ref("");

/** 이벤트 등록 */
const onClickTestBtn = asyncDebounce(test);
const onClickKafkaBtn = async () => {
  for (let i = 1; i <= 1; i++) {
    requestKafka();
  }
};
const onClickImgUploadBtn = () => uploadImageInputRef.value?.click();

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

async function requestKafka() {
  try {
    logItem.event = "click";

    /**access log 보내고 콘솔 찍어줌 */
    const res = await api.log.createLog(logItem);

    if (res?.status === 200) {
      alert(JSON.stringify(res.data));
    }
  } catch (e) {
    log("서버 에러: ", e);
  }
}

const onClickFileWriteBtn = asyncDebounce(writeFile);

// 파일쓰기 함수
async function writeFile(fileName: string) {
  if (fileName == "") return false;

  var fileObject = new ActiveXObject("Scripting.FileSystemObject");

  var fullPath = "./log.txt";

  // 파일이 생성되어있지 않으면 새로 만들고 기록

  if (!fileObject.FileExists(fullPath)) {
    var fWrite = fileObject.CreateTextFile(fullPath, false);

    fWrite.write(fileStr.value);

    fWrite.close();
  } else {
    // 파일이 이미 생성되어 있으면 appending 모드로 파일 열고 기록

    var fWrite = fileObject.OpenTextFile(fullPath, 8);

    fWrite.write(fileStr.value);

    fWrite.close();
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
