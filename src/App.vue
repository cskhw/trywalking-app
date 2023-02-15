<script setup lang="ts">
import { useTheme } from "vuetify";
import { useThemeConfig } from "@core/composable/useThemeConfig";
import { hexToRgb } from "@layouts/utils";
import Modal from "@/components/modal/Modal.vue";
import GlobalModal from "@/components/modal/GlobalModal.vue";
import useAppStore from "./stores/useAppStore";
import useModalStore from "./stores/useModalStore";

const {
  syncInitialLoaderTheme,
  syncVuetifyThemeWithTheme: syncConfigThemeWithVuetifyTheme,
  isAppRtl,
} = useThemeConfig();

const { global } = useTheme();

// ℹ️ Sync current theme with initial loader theme
syncInitialLoaderTheme();
syncConfigThemeWithVuetifyTheme();

const appStore = useAppStore();
const modalStore = useModalStore();
</script>

<template>
  <VLocaleProvider :rtl="isAppRtl">
    <!-- ℹ️ This is required to set the background color of active nav link based on currently active global theme's primary -->
    <VApp
      :style="`--v-global-theme-primary: ${hexToRgb(
        global.current.value.colors.primary
      )}`"
    >
      <RouterView />
    </VApp>
  </VLocaleProvider>
  <Teleport to="#modal-area">
    <Modal v-if="appStore.isShowModal"></Modal>
    <GlobalModal v-if="modalStore.isShowGlobalModal"> </GlobalModal>
  </Teleport>
</template>
<style lang="scss">
@import "@/styles/main";
// vuetify css
@import "vuetify/lib/styles/main.css";
</style>
