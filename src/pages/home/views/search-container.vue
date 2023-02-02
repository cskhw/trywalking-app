<script setup lang="ts">
import DTable from "@/components/DTable.vue";
import { dashboardTableStyle } from "../home";
import {
  tableheaders,
  searchQuery,
  tableValue,
  centerSelectItems,
  centerSelectValue,
  date,
  deliveryOrderSelectItems,
  deliveryOrderSelectValue,
  landingSelectItems as routeSelectItems,
  landingSelectValue as routeSelectValue,
  loadSelectItems,
  loadSelectValue,
  pickingSelectItems,
  pickingSelectValue,
  isShowOnlyCs,
  isShowOnlyPickingCompleted,
} from "./search-container";
import DatePicker from "vue3-datepicker";
</script>

<template>
  <VCard
    class="search-container pa-4 pb-2"
    color="white"
    style="border-radius: 0px 0px 24px 24px; white-space: nowrap"
  >
    <VRow class="px-3 pt-4">
      <!-- 날짜 선택 -->
      <VCol class="pa-0 pr-1" cols="8">
        <DatePicker
          style="height: 40px; overflow: hidden"
          v-model="date"
        ></DatePicker>
      </VCol>
      <!-- 센터미배정 -->
      <VCol class="pa-0 mr-1">
        <VSelect
          v-model="centerSelectValue"
          :item="centerSelectItems"
          variant="solo"
        >
        </VSelect>
      </VCol>
    </VRow>
    <VRow class="px-3 pt-2">
      <!-- 피킹 완료 스위치 -->
      <VCol class="pa-0 mr-1">
        <v-switch
          color="indigo"
          v-model="isShowOnlyPickingCompleted"
          inset
          label="피킹 완"
        ></v-switch>
      </VCol>
      <!-- 노선 선택 -->
      <VCol class="pa-0 mr-1">
        <VSelect
          v-model="routeSelectValue"
          :item="routeSelectItems"
          variant="solo"
        >
        </VSelect>
      </VCol>
      <!-- 착지 선택 -->
      <VCol class="pa-0 mr-1">
        <VSelect
          v-model="loadSelectValue"
          :item="loadSelectItems"
          variant="solo"
        >
        </VSelect>
      </VCol>
    </VRow>
    <VRow class="px-3 pt-2">
      <!-- CS업장 스위치 -->
      <VCol class="pa-0 mr-1">
        <v-switch
          color="indigo"
          v-model="isShowOnlyCs"
          inset
          label="CS업장"
        ></v-switch>
      </VCol>
      <!-- 적재 위치 -->
      <VCol class="pa-0 mr-1">
        <VSelect
          v-model="pickingSelectValue"
          :item="pickingSelectItems"
          variant="solo"
        >
        </VSelect>
      </VCol>
      <!--  -->
      <VCol class="pa-0 mr-1">
        <VSelect
          v-model="deliveryOrderSelectValue"
          :item="deliveryOrderSelectItems"
          variant="solo"
        >
        </VSelect>
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
          <span style="line-height: 24px">타요</span>
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
