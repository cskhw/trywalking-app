<script lang="ts" setup>
import type { ProfileHeader } from "@/@fake-db/types";
import useSettingsStore from "../useSettingsStore";

const profileHeaderData = ref<ProfileHeader>();

const settingsStore = useSettingsStore();
</script>

<template>
  <VCard>
    <VImg :src="settingsStore.headerData.coverImg" />

    <VCardText
      class="d-flex align-bottom flex-sm-row flex-column justify-center gap-x-5"
    >
      <div class="d-flex h-0">
        <VAvatar
          rounded
          size="120"
          :image="settingsStore.headerData.profileImg"
          class="user-profile-avatar mx-auto"
        />
      </div>

      <div class="user-profile-info w-100 mt-16 pt-6 pt-sm-0 mt-sm-0">
        <h6 class="text-h6 text-center text-sm-start font-weight-semibold mb-3">
          {{ settingsStore.headerData.fullName }}
        </h6>

        <div
          class="d-flex align-center justify-center justify-sm-space-between flex-wrap gap-4"
        >
          <VBtn prepend-icon="mdi-pencil"> Edit </VBtn>
        </div>
      </div>
    </VCardText>
  </VCard>
</template>

<style lang="scss">
.user-profile-avatar {
  border: 5px solid rgb(var(--v-theme-surface));
  background-color: rgb(var(--v-theme-surface)) !important;
  inset-block-start: -3rem;

  .v-img__img {
    border-radius: 0.125rem;
  }
}
</style>
