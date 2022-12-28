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
              (val, rules) =>
                val.length > 10 || '아이디를 정확하게 입력해주세요',
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
            @click="onClickSigninBtn"
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

const router = useRouter();

const loginForm = reactive<ILoginForm>({
  username: "",
  password: "",
});

// 함수 등록
const onClickSigninBtn = asyncDebounce(signin);

// 로그인 하고 세션 갱신
async function signin() {
  try {
    const signinRes = await api.auth.signin(loginForm, true);

    if (signinRes?.status === 200) {
      // 토큰 세션에 저장
      sessionStorage.setItem(COOKIE_ACCESS_TOKEN, signinRes.data.accessToken);
      sessionStorage.setItem(COOKIE_REFRESH_TOKEN, signinRes.data.refreshToken);

      // accessToken 갱신
      updateAt(signinRes.data.accessToken);

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
