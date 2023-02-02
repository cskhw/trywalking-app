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

const { appRouteTransition, isLessThanOverlayNavBreakpoint } = useThemeConfig();

const currentFragment = ref();
</script>

<template>
  <VerticalNavLayout :nav-items="navItems">
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

        <span class="text-purple-lighten-2">
          {{ themeConfig.app.title }}
        </span>

        <!-- <NavSearchBar class="ms-lg-n3" /> -->

        <VSpacer />
        <!-- 
        <NavBarI18n />
        <NavbarThemeSwitcher />
        <NavbarShortcuts />
        <NavBarNotifications class="me-2" />
        <UserProfile /> -->

        <VBtn style="width: 36px" flat>
          <span class="text-grey-darken-3 font-weight-bold"> 총량피킹 </span>
        </VBtn>
      </div>
    </template>

    <!-- 👉 Pages -->
    <RouterView v-slot="{ Component }">
      <Transition :name="appRouteTransition" mode="out-in">
        <Component :is="Component" />
      </Transition>
    </RouterView>

    <!-- BottomNavigation -->
    {{ currentFragment }}
    <VBottomNavigation v-model="currentFragment" grow>
      <VBtn value="inspection" style="flex: 1">
        <VIcon>mdi-document</VIcon>
        검수확인서
      </VBtn>
      <VBtn value="das" style="flex: 1">
        <VIcon>mdi-history</VIcon>
        DAS
      </VBtn>
      <VBtn value="setting" style="flex: 1">
        <VIcon>mdi-cog</VIcon>
        설정
      </VBtn>
    </VBottomNavigation>

    <!-- 👉 Customizer -->
    <!-- <TheCustomizer /> -->
  </VerticalNavLayout>
</template>
