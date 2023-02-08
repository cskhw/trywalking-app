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
import useHomeStore from "../useHomeStore";

const homeStore = useHomeStore();

const { isDeliveryOrderChangeMode, isCourceChangeMode, dashboardTableItems } =
  storeToRefs(homeStore);

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
      <!-- CS업장 스위치 -->
      <VCol class="pa-0 mr-1">
        <v-switch
          color="indigo"
          v-model="isShowOnlyCs"
          label="CS업장"
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
      <!-- 피킹 완료 스위치 -->
      <VCol class="pa-0 mr-1">
        <v-switch
          color="indigo"
          v-model="isShowOnlyPickingCompleted"
          label="피킹 중"
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

    <!-- SECTION Table -->
    <VTable
      class="text-no-wrap mt-5"
      :headers="[]"
      disable-pagination
      style="table-layout: auto; width: 100%"
    >
      <colgroup>
        <col width="33%" />
        <col width="33%" />
        <col width="33%" />
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
    <VRow class="pa-0 pt-1">
      <VCol class="pr-1">
        <VBtn
          style="width: 100%"
          :color="isDeliveryOrderChangeMode ? 'red' : 'green'"
          @click="onClickDeliveryBtn"
          >{{
            isDeliveryOrderChangeMode ? "배송 순서 저장" : "배송 순서 변경"
          }}</VBtn
        >
      </VCol>
      <VCol>
        <VBtn
          style="width: 100%"
          :color="isCourceChangeMode ? 'red' : 'blue'"
          @click="onClickCourceBtn"
          >{{ isCourceChangeMode ? "노선 저장" : "노선 변경" }}</VBtn
        >
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
          <span style="line-height: 24px">타요</span>
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
::v-deep(.search-container-driver-dashboard .v-btn__content) {
  width: 100%;
}
</style>
