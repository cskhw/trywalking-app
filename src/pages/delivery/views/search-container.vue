<script setup lang="ts">
import {
  centerSelectItems,
  centerSelectValue,
  date,
  deliveryOrderSelectItems,
  deliveryOrderSelectValue,
  routeSelectValue,
  routeSelectItems,
  loadSelectItems,
  loadSelectValue,
  pickingSelectItems,
  pickingSelectValue,
  isShowOnlyCs,
  isShowOnlyPickingCompleted,
  tableheaders,
  setStoresTableItemsByDelivery,
  setStoresTableItemsByCourse,
} from "./search-container";
import DatePicker from "vue3-datepicker";

import colors from "@/styles/colors";
import router from "@/router";
import { driverURL } from "@/composable/common";
import useDeliveryStore from "../useDeliveryStore";

const deliveryStore = useDeliveryStore();

const { isDeliveryOrderChangeMode, isCourceChangeMode, dashboardTableItems } =
  storeToRefs(deliveryStore);

const searchQuery = ref("");

const onClickDriverBtn = () => router.push(driverURL);

const onClickDeliveryBtn = setStoresTableItemsByDelivery;
const onClickCourceBtn = setStoresTableItemsByCourse;
</script>

<template>
  <VCard
    class="search-container pa-4 pb-2"
    color="white"
    style="border-radius: 0px 0px 24px 24px; white-space: nowrap"
  >
    <VRow class="px-3 pt-4">
      <!-- 날짜 선택 -->
      <VCol class="pa-0 pr-1" cols="4">
        <DatePicker
          style="height: 40px; overflow: hidden"
          v-model="date"
        ></DatePicker>
      </VCol>
      <!-- 센터미배정 -->
      <VCol class="pa-0 mr-1">
        <VSelect v-model="centerSelectValue" :item="centerSelectItems">
        </VSelect>
      </VCol>
      <!-- 노선 선택 -->
      <VCol class="pa-0 mr-1">
        <VSelect v-model="routeSelectValue" :item="routeSelectItems"> </VSelect>
      </VCol>
    </VRow>
    <VRow class="px-3 pt-2">
      <!-- 착지 선택 -->
      <VCol class="pa-0 mr-1">
        <VSelect v-model="loadSelectValue" :item="loadSelectItems"> </VSelect>
      </VCol>
      <!-- 적재 위치 -->
      <VCol class="pa-0 mr-1">
        <VSelect v-model="pickingSelectValue" :item="pickingSelectItems">
        </VSelect>
      </VCol>

      <!-- 상태 셀렉트 -->
      <VCol class="pa-0 mr-1">
        <VSelect
          v-model="deliveryOrderSelectValue"
          :item="deliveryOrderSelectItems"
        >
        </VSelect>
      </VCol>
    </VRow>

    <!-- 검색창 -->
    <VRow class="px-3 pt-2">
      <VBtn style="width: 56px; height: 40px" class="mr-1">초기화</VBtn>
      <VTextField
        class="mr-1"
        v-model="searchQuery"
        append-inner-icon="mdi-search"
      />
      <VBtn style="width: 56px; height: 40px">검색</VBtn>
    </VRow>

    <!-- SECTION Table -->
    <VTable
      class="text-no-wrap mt-5"
      disable-pagination
      style="table-layout: auto; width: 100%"
    >
      <colgroup>
        <col width="25%" />
        <col width="25%" />
        <col width="25%" />
        <col width="25%" />
      </colgroup>
      <!-- 👉 Table head -->
      <thead style="height: 32px; background-color: #f8f8f8">
        <tr style="height: 32px">
          <th
            class="font-weight-bold text-center pa-0"
            scope="col"
            style="height: 32px; color: #33303cde"
            v-for="header in tableheaders"
            :key="header"
          >
            {{ header }}
          </th>
        </tr>
      </thead>

      <!-- 👉 Table Body -->
      <tbody align="center">
        <tr
          v-for="(row, i) of dashboardTableItems"
          style="height: 32px; opacity: "
          :key="i"
          :style="{
            backgroundColor: i === 1 ? colors.dataTableHeader : '',
          }"
          :class="{
            'text-center': i === 1,
          }"
        >
          <template v-for="(value, key, j) in row">
            <td
              style="height: 32px; color: #33303cde"
              class="text-center pa-0"
              :class="{ 'font-weight-bold': i === 1 }"
            >
              {{ value }}
            </td>
          </template>
          <!-- 👉 Name -->
        </tr>
      </tbody>
    </VTable>

    <!-- 배송 순서 변경 && 노선 설정 -->
    <VRow class="pa-0 pt-1 px-3">
      <!-- 배송 순서 변경 버튼 -->
      <VCol class="pa-0 py-3 pr-1">
        <VBtn
          style="width: 100%"
          :color="isDeliveryOrderChangeMode ? 'red' : 'black'"
          @click="onClickDeliveryBtn"
          >{{
            isDeliveryOrderChangeMode ? "배송 순서 저장" : "배송 순서 변경"
          }}</VBtn
        >
      </VCol>

      <!-- 노선 변경 버튼 -->
      <VCol class="pa-0 py-3 pr-1">
        <VBtn
          style="width: 100%"
          :color="isCourceChangeMode ? 'red' : 'black'"
          @click="onClickCourceBtn"
          >{{ isCourceChangeMode ? "노선 저장" : "노선 변경" }}</VBtn
        >
      </VCol>

      <!-- CS업장 스위치 -->
      <VCol class="d-center pa-0 mr-1">
        <v-switch
          color="indigo"
          v-model="isShowOnlyCs"
          label="CS업장"
        ></v-switch>
      </VCol>
    </VRow>

    <!-- 히어로 설정 버튼 -->
    <VBtn
      class="mt-2 search-container-driver-dashboard"
      style="width: 100%"
      flat
      block
      @click="onClickDriverBtn"
    >
      <VRow style="width: 100%">
        <!-- 차량 번호 -->
        <VCol class="d-flex justify-space-evenly" cols="6">
          <VIcon size="24" icon="mdi-truck"></VIcon>
          <span style="line-height: 24px">123하4567</span>
        </VCol>
        <!-- 운전자 -->
        <VCol class="d-flex justify-space-evenly" cols="6">
          <VIcon size="24" icon="mdi-card-account-details"></VIcon>
          <span style="line-height: 24px">타요</span>
        </VCol>
      </VRow>
    </VBtn>
  </VCard>
</template>

<style lang="scss" scoped>
:deep(.search-container-driver-dashboard .v-btn__content) {
  width: 100%;
}
</style>
