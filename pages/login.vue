<template>
  <QPageContainer>
    <QPage class="column q-pa-lg">
      <!-- 타이틀 이미지 -->
      <div
        class="row items-center justify-center q-pa-lg text-weight-bolder font-size-32"
        style="flex: 3; padding-bottom: 48px"
      >
        오더히어로 정산관리 11/30 배포 테스트: nginx 헬스체크 추가 #2
      </div>

      <!-- 사업자 번호 인풋 -->
      <QForm style="flex: 4">
        <QInput
          class="q-pb-sm"
          v-model="loginForm.username"
          :rules="[
            (val, rules) =>
              val.length > 10 || '사업자 번호를 정확하게 입력해주세요',
          ]"
          mask=""
          label="사업자 번호를 입력해주세요."
          clearable
          autofocus
          no-error-icon
          outlined
          hide-bottom-space
        ></QInput>
        <!-- 비밀번호 인풋 -->
        <QInput
          class="q-pb-sm"
          type="password"
          v-model="loginForm.password"
          :rules="[
            (val, rules) =>
              (val.length >= 8 && val.length <= 20) ||
              '비밀번호는 8자 이상 20자 이하로 입력해주세요',
          ]"
          clearable
          no-error-icon
          label="비밀번호를 입력해주세요."
          outlined
          hide-bottom-space
        ></QInput>
        <!-- 자동로그인 체크박스 -->
        <QItem class="q-pa-none">
          <QCheckbox v-model="isAutoLogin" label="로그인 상태 유지"></QCheckbox>
        </QItem>
        <!-- 로그인 버튼 -->
        <QBtn
          class="q-mt-md full-width bg-light-blue text-white text-weight-bolder"
          flat
          size="1rem"
          @click="onClickLogin"
          >로그인</QBtn
        >

        <QBtn
          class="q-mt-md full-width bg-light-blue text-white text-weight-bolder"
          flat
          size="1rem"
          @click="onClickTestRequestBtn"
          >60초 딜레이 테스트</QBtn
        >

        <!-- 로그인 메뉴 -->
        <QItem class="q-gutter-sm row justify-center items-center"
          ><QBtn flat>비밀번호 찾기 </QBtn>
          <div class="vertical-center font-size-6">|</div>
          <QBtn flat> 회원가입</QBtn></QItem
        >
      </QForm>
      <!-- 로그인 푸터 -->
      <QItem class="column items-center" style="flex: 3">
        <div>DELIVERLY LAB | 주식회사 딜리버리랩</div>
        <div>DELIVERLY LAB | 주식회사 딜리버리랩</div>
        <div>DELIVERLY LAB | 주식회사 딜리버리랩</div>
        <div>DELIVERLY LAB | 주식회사 딜리버리랩</div>
        <div>DELIVERLY LAB | 주식회사 딜리버리랩</div>
      </QItem>
    </QPage>
  </QPageContainer>
</template>
<script setup lang="ts">
import api from "@/api/api";
import useAppStore from "@/stores/useAppStore";
import { asyncDebounce } from "@/utils/asyncDebounce";
import axios from "axios";

const appStore = useAppStore();
const router = useRouter();

const date = new Date().toLocaleTimeString();

const isAutoLogin = ref(false);
const loginForm = reactive({
  username: "",
  password: "",
});

const onClickLogin = asyncDebounce(login);
async function onClickTestRequestBtn() {
  try {
    const res = await axios.get(
      "https://eaed5e51-7e78-4177-ba49-66e094bba04c.mock.pstmn.io/TEST"
    );
    alert(`요청 성공!: ${res.data}`);
  } catch (e) {
    console.log(e);
  }
}

async function login() {
  router.push("/");
  // try {
  //   //TODO: 로그인 로직 필요
  //   // const res = await api.auth.login(loginForm);
  //   if (
  //     loginForm.username === "choonsik" &&
  //     loginForm.password === "asdf1234!"
  //   ) {
  //     cookies.set(COOKIE_ACCESS_TOKEN, "at-test");
  //     cookies.set(COOKIE_REFRESH_TOKEN, "rt-test");
  //     // 자동 로그인 쿠키 저장
  //     if (isAutoLogin.value) cookies.set(COOKIE_AUTO_LOGIN, "true");
  //     else cookies.remove(COOKIE_AUTO_LOGIN);
  //     await router.push("/");
  //   } else {
  //     alert("아이디 혹은 비밀번호를 확인해주세요");
  //   }
  // } catch (e: any) {
  //   log(e);
  // }
}
</script>
