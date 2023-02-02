<script setup lang="ts">
import DTable from "@/components/DTable.vue";
import { dashboardTableStyle } from "@/pages/home/home";

const tableheaders = ref(["피킹 중/완/합계", "배송 중/완/합계", "적재 내/외"]);

const tableValue = ref([
  { a: "42/38/80", b: "42/38/80", c: "42" },
  { a: "총 매장 수", b: "총 수량", c: "총 주문 금액" },
  { a: "999,999", b: "9,999,999", c: "99,999,999,999" },
]);

const searchQuery = ref("test");
</script>

<template>
  <VCard class="pa-4 pb-2" color="white" style="border-radius: 0px 0px 4px 4px">
    <VRow class="px-3 pt-4">
      <!-- 날짜 선택 -->
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
    </VRow>
    <!-- 검색창 -->
    <VRow class="px-3 pt-2">
      <VBtn style="width: 56px" class="mr-1">초기화</VBtn>
      <VTextField
        v-model="searchQuery"
        variant="solo"
        append-inner-icon="mdi-search"
      />
    </VRow>
    <!-- 대시보드 테이블 -->
    <DTable
      class="mt-5"
      v-model="tableValue"
      :headers="tableheaders"
      :table-styles="dashboardTableStyle"
    >
    </DTable>
    <!-- 히어로 설정 버튼 -->
    <VBtn
      class="mt-2 search-container-driver-dashboard"
      style="width: 100%; height: 32px"
      flat
      block
    >
      <VRow style="width: 100%">
        <!-- 차량 번호 -->
        <VCol class="d-flex justify-space-evenly" cols="6">
          <VIcon color="blue-darken-2" size="24" icon="mdi-truck"></VIcon>
          <span style="line-height: 24px">123가5678</span>
        </VCol>
        <!-- 운전자 -->
        <VCol class="d-flex justify-space-evenly" cols="6">
          <VIcon color="gray" size="24" icon="mdi-card-account-details"></VIcon>
          <span style="line-height: 24px">타요</span>
        </VCol>
      </VRow>
    </VBtn>
  </VCard>
</template>

<style lang="scss" scoped>
::v-deep(.search-container-driver-dashboard .v-btn__content) {
  width: 100%;
}
</style>
