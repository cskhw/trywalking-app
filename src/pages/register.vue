<script setup lang="ts">
import { VForm } from "vuetify/components";
import authV2RegisterIllustrationBorderedDark from "@images/pages/auth-v2-register-illustration-bordered-dark.png";
import authV2RegisterIllustrationBorderedLight from "@images/pages/auth-v2-register-illustration-bordered-light.png";
import authV2RegisterIllustrationDark from "@images/pages/auth-v2-register-illustration-dark.png";
import authV2RegisterIllustrationLight from "@images/pages/auth-v2-register-illustration-light.png";
import authV2MaskDark from "@images/pages/misc-mask-dark.png";
import authV2MaskLight from "@images/pages/misc-mask-light.png";

import AuthProvider from "@/views/pages/authentication/AuthProvider.vue";
import { useGenerateImageVariant } from "@core/composable/useGenerateImageVariant";
import { VNodeRenderer } from "@layouts/components/VNodeRenderer";
import { themeConfig } from "@themeConfig";
import { alphaDashValidator, requiredValidator } from "@validators";

import type { SignupForm } from "@/stores/useAuthStore.d";
import api from "@/api/api";

const refVForm = ref<VForm>();

const signupForm = reactive<SignupForm>({
  username: "",
  password: "",
  nickname: "",
  roles: ["ROLE_USER"],
});

const confirmPassword = ref("");

const privacyPolicies = ref(true);

const imageVariant = useGenerateImageVariant(
  authV2RegisterIllustrationLight,
  authV2RegisterIllustrationDark,
  authV2RegisterIllustrationBorderedLight,
  authV2RegisterIllustrationBorderedDark,
  true
);

const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark);

const isPasswordVisible = ref(false);

const router = useRouter();

const onClickSubmitBtn = async () => {
  if (!privacyPolicies.value) {
    alert("약관에 동의해주세요!");
    return;
  }

  if (!(await refVForm.value?.validate())) {
    alert("유효한 아이디를 입력해주세요.");
    return;
  }

  if (confirmPassword.value !== signupForm.password) {
    alert("비밀번호와 확인 비밀번호는 같아야 합니다.");
    return;
  }

  const signinRes = await api.auth.signup(signupForm, true);

  if (signinRes?.status === 200) {
    alert("회원가입 성공! 로그인 해주세요.");
    await router.push("/login");
  } else {
    alert(JSON.stringify(signinRes.data));
  }
};
</script>

<template>
  <VRow no-gutters class="auth-wrapper">
    <VCol lg="8" class="d-none d-lg-flex">
      <div class="position-relative auth-bg rounded-lg w-100 ma-8 me-0">
        <div class="d-flex align-center justify-center w-100 h-100">
          <VImg
            max-width="441"
            :src="imageVariant"
            class="auth-illustration mt-16 mb-2"
          />
        </div>

        <VImg class="auth-footer-mask" :src="authThemeMask" />
      </div>
    </VCol>

    <VCol cols="12" lg="4" class="d-flex align-center justify-center">
      <VCard flat :max-width="500" class="mt-12 mt-sm-0 pa-4">
        <VCardText>
          <VNodeRenderer :nodes="themeConfig.app.logo" class="mb-6" />
          <h5 class="text-h5 font-weight-semibold mb-1">회원가입</h5>
        </VCardText>

        <VCardText>
          <VForm ref="refVForm" @submit.prevent="onClickSubmitBtn">
            <VRow>
              <!-- Username -->
              <VCol cols="12">
                <VTextField
                  v-model="signupForm.username"
                  :rules="[requiredValidator, alphaDashValidator]"
                  label="Username"
                />
              </VCol>

              <!-- nickname -->
              <VCol cols="12">
                <VTextField
                  v-model="signupForm.nickname"
                  :rules="[requiredValidator, alphaDashValidator]"
                  label="Nickname"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <VTextField
                  v-model="signupForm.password"
                  :rules="[requiredValidator]"
                  label="Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="
                    isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'
                  "
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <!-- confirm password -->
              <VCol cols="12">
                <VTextField
                  v-model="confirmPassword"
                  :rules="[
                    requiredValidator,
                    (value: unknown) => {
                      return value === signupForm.password ||
                        '비밀번호와 다릅니다.';
                    },
                  ]"
                  label="Confirm
                Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="
                    isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'
                  "
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />

                <div class="d-flex align-center mt-2 mb-4">
                  <VCheckbox
                    id="privacy-policy"
                    v-model="privacyPolicies"
                    inline
                  />
                  <VLabel for="privacy-policy" class="pb-1" style="opacity: 1">
                    <span class="me-1">I agree to</span>
                    <a href="javascript:void(0)" class="text-primary"
                      >privacy policy & terms</a
                    >
                  </VLabel>
                </div>

                <VBtn block type="submit"> Sign up </VBtn>
              </VCol>

              <!-- create account -->
              <VCol cols="12" class="text-center text-base">
                <span>Already have an account?</span>
                <RouterLink class="text-primary ms-2" :to="{ name: 'login' }">
                  Sign in instead
                </RouterLink>
              </VCol>

              <VCol cols="12" class="d-flex align-center">
                <VDivider />
                <span class="mx-4">or</span>
                <VDivider />
              </VCol>

              <!-- auth providers -->
              <VCol cols="12" class="text-center">
                <AuthProvider />
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
  layout: blank
  action: read
  subject: Auth
  redirectIfLoggedIn: true
</route>
