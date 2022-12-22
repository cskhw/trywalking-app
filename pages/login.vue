<template>
  <QPageContainer>
    <QPage class="column q-pa-lg">
      <!-- 타이틀 이미지 -->
      <div
        class="row items-center justify-center q-pa-lg text-weight-bolder font-size-32"
        style="flex: 3; padding-bottom: 48px"
      >
        <div style="cursor: pointer" @click="$router.push('/')">
          오더히어로 검수확인서 관리자
        </div>
      </div>

      <!-- 로그인 폼 -->
      <div class="row items-center justify-center">
        <QForm class="login-form shadow-1">
          <!-- 아이디 인풋 -->
          <QInput
            class="q-pb-sm"
            v-model="loginForm.username"
            :rules="[
              (val, rules) => val.length > 10 || '아읻 정확하게 입력해주세요',
            ]"
            mask=""
            label="아이디를 입력해주세요"
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

          <!-- 로그인 버튼 -->
          <QBtn
            class="q-mt-md full-width bg-light-blue text-white text-weight-bolder"
            flat
            size="1rem"
            @click="onClickLogin"
            >로그인</QBtn
          >

          <!-- 로그인 메뉴 -->
          <QItem class="q-gutter-sm row justify-center items-center"
            ><QBtn flat>비밀번호 찾기 </QBtn>
            <div class="vertical-center font-size-6">|</div>
            <QBtn @click="$router.push('/signup')" flat> 회원가입</QBtn></QItem
          >
        </QForm>
      </div>
      <!-- 로그인 푸터 -->
      <QItem class="column items-center" style="flex: 3"> </QItem>
    </QPage>
  </QPageContainer>
</template>
<script setup lang="ts">
import api from "@/api/api";
import instance from "@/api/instance";
import useAppStore from "@/stores/useAppStore";
import { asyncDebounce } from "@/utils/asyncDebounce";
import { mdiConsoleNetworkOutline } from "@mdi/js";
import { AxiosRequestConfig } from "axios";

const appStore = useAppStore();
const router = useRouter();

const loginForm = reactive({
  username: "",
  password: "",
});

const onClickLogin = asyncDebounce(login);

async function login() {
  try {
    //TODO: 로그인 로직 필요
    const res = await api.auth.signin(loginForm, true);
    if (res?.status === 200) {
      console.log(res.data);

      // 자동 로그인 쿠키 설정
      sessionStorage.setItem(COOKIE_ACCESS_TOKEN, res.data.accessToken);
      sessionStorage.setItem(COOKIE_REFRESH_TOKEN, res.data.refreshToken);

      // 인증 토큰 인터셉터에 설정
      instance.interceptors.request.use(
        function (config: AxiosRequestConfig) {
          config.headers = config.headers ? config.headers : {};
          config.headers.Authorization = "Bearer " + res.data.accessToken;
          return config;
        },
        function (error) {
          console.log(error);
          return Promise.reject(error);
        }
      );

      await router.push("/");
    } else {
      alert("아이디 혹은 비밀번호를 확인해주세요");
    }
  } catch (e: any) {
    log(e);
  }
}
</script>
<style lang="scss" scoped>
.login-form {
  flex: 4;
  max-width: 400px;

  border: 1px solid $grey-4;
  border-radius: 4px;
  padding: 1rem;
}
</style>
