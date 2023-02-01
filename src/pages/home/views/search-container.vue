<script setup lang="ts">
import DTable from "@/components/DTable.vue";
import { tableStyle } from "@/pages/home/views/search-container";

const tableValue = ref([
  { a: "42/38/80", b: "42/38/80", c: "42" },
  { a: "총 매장 수", b: "총 수량", c: "총 주문 금액" },
  { a: "999,999", b: "9,999,999", c: "99,999,999,999" },
]);

const searchQuery = ref("test");
</script>

<template>
  <VCard class="pa-4" color="white" style="border-radius: 0px 0px 4px 4px">
    <VRow class="px-3 pt-4">
      <VCol class="pa-0 mr-1">
        <VSelect variant="solo"> </VSelect>
      </VCol>
      <VCol class="pa-0 mr-1">
        <VSelect variant="solo"> </VSelect>
      </VCol>
      <VCol class="pa-0 mr-1">
        <VSelect variant="solo"> </VSelect>
      </VCol>
    </VRow>
    <VRow class="px-3 pt-2">
      <VCol class="pa-0 mr-1">
        <VSelect variant="solo"> </VSelect>
      </VCol>
      <VCol class="pa-0 mr-1">
        <VSelect variant="solo"> </VSelect>
      </VCol>
      <VCol class="pa-0 mr-1">
        <VSelect variant="solo"> </VSelect>
      </VCol>
      <VCol class="pa-0 mr-1">
        <VSelect variant="solo"> </VSelect>
      </VCol>
    </VRow>
    <VRow class="px-3 pt-2">
      <VBtn style="width: 56px" class="mr-1">초기화</VBtn>
      <VTextField
        v-model="searchQuery"
        variant="solo"
        append-inner-icon="mdi-search"
      />
    </VRow>
    <DTable
      class="mt-5"
      v-model="tableValue"
      :headers="['피킹 중/완/합계', '배송 중/완/합계', '적재 내/외']"
      :table-styles="tableStyle"
    >
    </DTable>
  </VCard>
</template>

<style lang="scss">
.card-website-analytics-img {
  block-size: 160px;
}

@media screen and (min-width: 600px) {
  .card-website-analytics-img {
    position: absolute;
    margin: auto;
    inset-block-end: 40px;
    inset-block-start: -1rem;
    inset-inline-end: 1rem;
  }
}

.web-analytics-carousel {
  .v-carousel__controls {
    .v-btn:not(.v-btn--active) {
      opacity: 0.4;
    }
  }
}
</style>
