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
            v-model="signupForm.username"
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
            v-model="signupForm.password"
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
            v-model="signupForm.role"
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
            @click="onClickSignup"
            >회원가입</QBtn
          >

          <!-- 로그인 메뉴 -->
          <QItem class="q-gutter-sm row justify-center items-center"
            ><QBtn flat>비밀번호 찾기 </QBtn>
            <div class="vertical-center font-size-6">|</div>
            <QBtn @click="$router.push('/signin')" flat> 로그인</QBtn></QItem
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
import type { IHttpError } from "@/api/error";

const router = useRouter();

const signupForm = reactive({
  username: "",
  password: "",
  role: { label: "권한을 선택해주세요.", value: null },
});

const roleSelectOptions = ref([
  { label: "권한을 선택해주세요.", value: null },
  { label: "USER", value: "ROLE_USER" },
  { label: "MODERATOR", value: "ROLE_MODERATOR" },
  { label: "ADMIN", value: "ROLE_ADMIN" },
]);

const onClickSignup = asyncDebounce(signup);

async function signup() {
  try {
    // 로그인 폼 유효성 체크
    for (const props in signupForm) {
      // @ts-ignore
      if (signupForm[props] === null) {
        alert("모든 값을 입력해주세요.");
        return;
      }
      // @ts-ignore
      if (signupForm[props]?.value === null) {
        alert("권한을 선택해주세요.");
        return;
      }
    }

    const form = {
      username: signupForm.username,
      password: signupForm.password,
      role: [signupForm.role.value as unknown as string],
    };

    const res = await api.auth.signup(form);

    // 회원가입 요청 성공하면
    if (res?.status === 200) {
      // 자동 로그인 쿠키 저장

      alert("회원가입 성공!");
      await router.push("/");
    } else {
      const errorMsg = res.data as unknown as string;
      if (res?.status === 400) {
        if (errorMsg.includes("Username is already taken")) {
          alert("이미 가입된 아이디입니다.");
        } else if (errorMsg.includes("Username is already taken")) {
          alert("아이디, 비밀번호, 권한을 확인해주세요.");
        }
      } else {
        alert("서버 에러");
      }
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
