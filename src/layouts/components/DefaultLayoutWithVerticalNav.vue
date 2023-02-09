<script lang="ts" setup>
import navItems from "@/navigation/vertical";
import { useThemeConfig } from "@core/composable/useThemeConfig";

// Components
import Footer from "@/layouts/components/Footer.vue";
// import NavBarNotifications from "@/layouts/components/NavBarNotifications.vue";
// import NavbarShortcuts from "@/layouts/components/NavbarShortcuts.vue";
// import NavbarThemeSwitcher from "@/layouts/components/NavbarThemeSwitcher.vue";
// import NavSearchBar from "@/layouts/components/NavSearchBar.vue";
// import UserProfile from "@/layouts/components/UserProfile.vue";

// @layouts plugin
import { VerticalNavLayout } from "@layouts";
// import { themeConfig } from "@themeConfig";

// const { appRouteTransition } = useThemeConfig();

const currentFragment = ref("");
const route = useRoute();
const router = useRouter();

const onClickInspectionBtn = (fragment: string) => {
  router.push(fragment);
};

const onClickBackBtn = () => {
  router.go(-1);
};

// 앱 타이틀 설정
const appTitle = computed(() => {
  let title = "MFC 모바일";
  if (route.path === "/inspection/driver") title = "배송기사 설정";
  else if (route.path === "/inspection/upload") title = "배송사진 올리기";
  else if (route.path === "/inspection/total-picking") title = "총량 피킹";
  else if (route.path === "/category") title = "유통사 중분류";
  else if (route.path === "/das") title = "유통사 중분류";
  else if (route.path === "/settings") title = "유통사 중분류";
  return title;
});
</script>

<template>
  <VerticalNavLayout class="pa-0" :nav-items="navItems">
    <!-- 👉 navbar -->
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="d-flex h-100 align-center">
        <!-- 사이드바 사용하지 않음 -->
        <!-- <VBtn
          v-if="isLessThanOverlayNavBreakpoint(windowWidth)"
          icon
          variant="text"
          color="default"
          class="ms-n3"
          size="small"
          @click="toggleVerticalOverlayNavActive(true)"
        >
          <VIcon
            icon="tabler-menu-2"
            size="24"
          />
        </VBtn> -->

        <span class="text-primary text-h5 font-weight-black">
          {{ appTitle }}
        </span>

        <!-- <NavSearchBar class="ms-lg-n3" /> -->

        <VSpacer />
        <!-- 
        <NavBarI18n />
        <NavbarThemeSwitcher />
        <NavbarShortcuts />
        <NavBarNotifications class="me-2" />
        <UserProfile /> -->

        <VBtn
          v-if="route.path !== '/' && route.path !== '/inspection'"
          style="max-width: 40px !important; height: 40px"
          color="white"
          flat
          icon=""
          fab
          @click="onClickBackBtn"
        >
          <VIcon size="40" color="grey-darken-2">mdi-chevron-left</VIcon>
        </VBtn>

        <VBtn
          v-if="route.path === '/inspection'"
          flat
          @click="router.push('/inspection/total-picking')"
        >
          <span class="font-weight-bold"> 총량피킹 </span>
        </VBtn>
      </div>
    </template>

    <!-- 👉 Pages -->
    <RouterView v-slot="{ Component }">
      <!-- <Transition :name="appRouteTransition" mode="out-in"> -->
      <Component :is="Component" />
      <!-- </Transition> -->
    </RouterView>

    <!-- BottomNavigation -->
    <VBottomNavigation v-model="currentFragment" grow>
      <VBtn
        @click="onClickInspectionBtn('/category')"
        value="category"
        style="flex: 1"
      >
        <VIcon>mdi-category</VIcon>
        중분류
      </VBtn>
      <VBtn
        @click="onClickInspectionBtn('/inspection')"
        value="inspection"
        style="flex: 1"
      >
        <VIcon>mdi-document</VIcon>
        검수확인서
      </VBtn>
      <VBtn @click="onClickInspectionBtn('/das')" value="das" style="flex: 1">
        <VIcon>mdi-history</VIcon>
        DAS
      </VBtn>
      <VBtn
        @click="onClickInspectionBtn('/settings')"
        value="settings"
        style="flex: 1"
      >
        <VIcon>mdi-cog</VIcon>
        설정
      </VBtn>
    </VBottomNavigation>

    <!-- 👉 Customizer -->
    <!-- <TheCustomizer /> -->
  </VerticalNavLayout>
</template>
