<script lang="ts" setup>
import useSettingsStore from "../useSettingsStore";

const settingsStore = useSettingsStore();
</script>

<template>
  <VCard class="mb-4">
    <VCardText>
      <p class="text-xs">ABOUT</p>

      <VList class="card-list text-medium-emphasis">
        <VListItem
          v-for="item in settingsStore.aboutsData"
          :key="item.property"
        >
          <template #prepend>
            <VIcon :icon="item.icon" size="20" class="me-2" />
          </template>
          <VListItemTitle>
            <span class="font-weight-semibold me-1">{{ item.property }}:</span>
            <span>{{ item.value }}</span>
          </VListItemTitle>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 16px;
}
</style>
