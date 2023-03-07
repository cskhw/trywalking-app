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
import {
  deliveryDetailURL,
  deliveryInspectionURL,
  deliveryUploadURL,
} from "@/composable/common";
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

  // user-list
  if (route.path === userListURL) title = "내 주변";
  // chat
  else if (route.path === driverURL) title = "채팅";
  else if (route.path === uploadURL) title = "배송사진 올리기";
  else if (route.path === totalPickingURL) title = "총량 피킹";
  else if (route.path === dasURL) title = "친구";
  // friends
  else if (route.path === deliveryURL) title = "친구";
  else if (route.path === deliveryDetailURL) title = "배송 상세";
  else if (route.path === deliveryInspectionURL) title = "검수확인서";
  else if (route.path === deliveryUploadURL) title = "사진 올리기";
  // settings
  else if (route.path === settingsURL) title = "설정";

  return title;
});

const showBackBtn = computed(() => {
  return (
    route.path !== "/" &&
    route.path !== userListURL &&
    route.path !== dasURL &&
    route.path !== settingsURL
  );
});
</script>
<template>
  <VerticalNavLayout class="pa-0" :nav-items="navItems">
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <!-- 👉 navbar -->
      <div class="d-flex h-100 align-center">
        <VBtn
          v-if="showBackBtn"
          style="max-width: 40px !important; height: 40px"
          color="white"
          flat
          icon=""
          fab
          @click="onClickBackBtn"
        >
          <VIcon size="40" color="grey-darken-2">mdi-chevron-left</VIcon>
        </VBtn>

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
        <VSpacer />

        <!-- 타이틀 -->
        <span
          class="text-black text-h6 font-weight-black"
          style="position: absolute; left: 50%; transform: translate(-51%, 0)"
        >
          {{ appTitle }}
        </span>
        <VSpacer />

        <VBtn
          v-if="route.path === '/das'"
          flat
          @click="router.push('/das/total-picking')"
        >
          <span class="font-weight-bold"> 총량피킹 </span>
        </VBtn>

        <!-- <NavSearchBar class="ms-lg-n3" /> -->

        <!-- 
        <NavBarI18n />
        <NavbarThemeSwitcher />
        <NavbarShortcuts />
        <NavBarNotifications class="me-2" />
        <UserProfile /> -->
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
      <VBtn @click="onClickInspectionBtn('/das')" value="das" style="flex: 1">
        <VIcon>mdi-history</VIcon>
        DAS
      </VBtn>

      <VBtn
        @click="onClickInspectionBtn('/delivery')"
        value="delivery"
        style="flex: 1"
      >
        <VIcon>mdi-truck</VIcon>
        배송
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
