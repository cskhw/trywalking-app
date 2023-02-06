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
import { themeConfig } from "@themeConfig";
import router from "@/router";

const { appRouteTransition } = useThemeConfig();

const currentFragment = ref("");
const route = useRoute();

const onClickInspectionBtn = (fragment: string) => {
  router.push(fragment);
};

const onClickBackBtn = () => {
  router.go(-1);
};

// 앱 타이틀 설정
const appTitle = computed(() => {
  let title = "MFC 모바일";
  if (route.path === "/home/driver") title = "배송기사 설정";
  if (route.path === "/home/driver") title = "배송기사 설정";
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
          v-if="route.path !== '/' && route.path !== '/home'"
          style="max-width: 40px !important; height: 40px"
          color="white"
          flat
          icon=""
          fab
          @click="onClickBackBtn"
        >
          <v-icon size="40" color="grey-darken-2">mdi-chevron-left</v-icon>
        </VBtn>

        <VBtn v-if="route.path === '/home'" flat>
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
      <VBtn @click="onClickInspectionBtn('/home')" value="home" style="flex: 1">
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
