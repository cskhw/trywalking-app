<template>
  <QPageContainer>
    <QPage class="column q-pa-lg">
      <!-- 타이틀 이미지 -->
      <div
        class="row items-center justify-center q-pa-lg text-weight-bolder font-size-32"
        style="flex: 3; padding-bottom: 48px"
      >
        <div style="cursor: pointer" @click="$router.push('/')">
          오더히어로 검수확인서 관리자 회원가입
        </div>
      </div>

      <!-- 사업자 번호 인풋 -->
      <div class="row items-center justify-center">
        <QForm class="login-form shadow-1">
          <QInput
            class="q-pb-sm"
            v-model="loginForm.username"
            :rules="[
              (val, rules) =>
                val.length > 10 || '아이디를 정확하게 입력해주세요',
            ]"
            mask=""
            label="아이디를 입력해주세요."
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
          <!-- 권한 선택 셀렉트 -->
          <QSelect
            v-model="loginForm.role"
            :options="roleSelectOptions"
            outlined
            input-style="transition: all 10s ease-in-out !important"
          >
          </QSelect>

          <!-- 로그인 버튼 -->
          <QBtn
            class="q-mt-md full-width bg-light-blue text-white text-weight-bolder"
            flat
            size="1rem"
            @click="onClickLogin"
            >회원가입</QBtn
          >

          <!-- 로그인 메뉴 -->
          <QItem class="q-gutter-sm row justify-center items-center"
            ><QBtn flat>비밀번호 찾기 </QBtn>
            <div class="vertical-center font-size-6">|</div>
            <QBtn @click="$router.push('/login')" flat> 로그인</QBtn></QItem
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
  role: { label: "권한을 선택해주세요.", value: null },
});

const roleSelectOptions = ref([
  { label: "권한을 선택해주세요.", value: null },
  { label: "admin", value: "admin" },
  { label: "normal", value: "normal" },
]);

const onClickLogin = asyncDebounce(login);

async function login() {
  try {
    // 로그인 폼 유효성 체크
    log(loginForm);
    for (const props in loginForm) {
      // @ts-ignore
      if (loginForm[props] === null) {
        alert("모든 값을 입력해주세요.");
        return;
      }
      // @ts-ignore
      log(props);
      if (loginForm[props]?.value === null) {
        alert("권한을 선택해주세요.");
        return;
      }
    }

    const form = {
      username: loginForm.username,
      password: loginForm.username,
      role: loginForm.role.value as unknown as string,
    };

    const res = await api.auth.signup(form);

    console.log(res);

    if (res?.status === 200) {
      cookies.set(COOKIE_ACCESS_TOKEN, "at-test");
      cookies.set(COOKIE_REFRESH_TOKEN, "rt-test");
      // 자동 로그인 쿠키 저장
      if (isAutoLogin.value) cookies.set(COOKIE_AUTO_LOGIN, "true");
      else cookies.remove(COOKIE_AUTO_LOGIN);
      // await router.push("/");
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
