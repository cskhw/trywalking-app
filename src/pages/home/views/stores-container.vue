<script setup lang="ts">
import DTable from "@/components/DTable.vue";
import { tableValue, tableheaders, storeTableStyle } from "./stores-container";
</script>

<template>
  <!-- 대시보드 테이블 -->
  <DTable
    class="pa-2 pt-3"
    v-model="tableValue"
    style="color: black"
    :headers="tableheaders"
    :table-styles="storeTableStyle"
  >
  </DTable>
</template>

<style lang="scss" scoped>
::v-deep(.search-container-driver-dashboard .v-btn__content) {
  width: 100%;
}
</style>
