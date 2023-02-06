<script setup lang="ts">
import { tableValue, tableheaders } from "./stores-container";

function getColor(status: string) {
  if (status === "배송완") return "success";
  if (status === "배송중") return "orange";
  if (status === "피킹중") return "blue";
  if (status === "배송중") return "yellow";
}
</script>

<template>
  <!-- 대시보드 테이블 -->
  <div class="stores-container pa-2">
    <VDataTable
      class="stores-container-table elevation-1 rounded"
      :headers="tableheaders"
      :items="tableValue"
    >
      <template v-slot:item.storeName="{ item }">
        <div class="font-weight-bold" style="width: 96px">
          {{ item.raw.storeName }}
        </div>
      </template>

      <template v-slot:item.loadingPosition="{ item }">
        <span style="width: 16px">
          {{ item.raw.loadingPosition }}
        </span>
      </template>

      <template v-slot:item.count="{ item }">
        <div style="width: 16px">
          {{ item.raw.count }}
        </div>
      </template>

      <template v-slot:item.status="{ item }">
        <VChip outlined :color="getColor(item.raw.status)">
          {{ item.raw.status }}
        </VChip>
      </template>

      <template v-slot:item.camera="{ item }">
        <VIcon
          size="30"
          color="#999999"
          icon="mdi-panorama-variant-outline "
        ></VIcon>
      </template>
    </VDataTable>
  </div>
</template>

<style lang="scss" scoped>
::v-deep(.stores-container-table th) {
  font-weight: bold !important;
  padding: 6px !important;
  background-color: #fafafa !important;
  font-size: 14px !important;
}

::v-deep(.stores-container-table td) {
  padding: 6px !important;
  font-size: 14px !important;
}
</style>
