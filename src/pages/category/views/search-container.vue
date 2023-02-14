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
import useHomeStore from "../useCategoryStore";

const homeStore = useHomeStore();

const { isDeliveryOrderChangeMode, isCourceChangeMode, dashboardTableItems } =
  storeToRefs(homeStore);

const searchQuery = ref("");

const isSelectAllCourceSelectValue = computed(
  () => courceSelectValue.value.length === courceSelectItems.value.length
);

/**코스 선택 셀렉트 */
const courceSelectValue = ref<string[]>([]);
const courceSelectItems = ref(["왕십리A", "왕십리B", "왕십리C", "왕십리D"]);

const isSelectedSomeCource = computed(() => courceSelectValue.value.length > 0);

const onClickSelectAllBtnInCourceSelect = () => {
  isSelectAllCourceSelectValue.value
    ? (courceSelectValue.value = [])
    : (courceSelectValue.value = [...courceSelectItems.value]);
};

const onClickDriverBtn = () => router.push(driverURL);

const onClickDeliveryBtn = setStoresTableItemsByDelivery;
const onClickCourceBtn = setStoresTableItemsByCourse;
</script>

<template>
  <VCard
    class="category-search-container pa-4 pb-2"
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
      <VCol class="pa-0">
        <VSelect v-model="centerSelectValue" :item="centerSelectItems">
        </VSelect>
      </VCol>
    </VRow>

    <!-- 검색창 -->
    <VRow class="px-3 pt-2">
      <VCol class="pa-0" cols="9">
        <VSelect
          class="category-search-container-cource-select mr-1"
          v-model="courceSelectValue"
          :items="courceSelectItems"
          chips
          label="코스"
          multiple
        >
          <!-- 전체 선택 버튼 -->
          <template v-slot:prepend-item>
            <v-list-item
              title="Select All"
              @click="onClickSelectAllBtnInCourceSelect"
            >
              <template v-slot:prepend>
                <v-checkbox-btn
                  :indeterminate="
                    isSelectedSomeCource && !isSelectAllCourceSelectValue
                  "
                  :model-value="isSelectAllCourceSelectValue"
                ></v-checkbox-btn>
              </template>
            </v-list-item>

            <v-divider class="mt-2"></v-divider>
          </template>
        </VSelect>
      </VCol>
      <VCol class="pa-0" cols="3">
        <VBtn style="width: 100%; height: 40px">조회</VBtn>
      </VCol>
    </VRow>

    <VRow class="px-3">
      <VCol class="pa-0">
        <!-- 대시보드 테이블 1 -->
        <VTable
          class="text-no-wrap mt-2 mb-3"
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
            >
              <template v-for="(value, key, j) in row">
                <td
                  style="height: 32px; color: #33303cde"
                  class="text-center pa-0"
                >
                  {{ value }}
                </td>
              </template>
              <!-- 👉 Name -->
            </tr>
          </tbody>
        </VTable>
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss" scoped>
:deep(.category-search-container-cource-select .v-input__control) {
  min-height: 40px;
  .v-select__selection {
    margin: 2px;
  }
  .v-field__input {
    padding: 4px;
  }
  .v-chip {
    height: 28px;
  }
}
:deep(.category-search-container-driver-dashboard .v-btn__content) {
  width: 100%;
}
</style>
