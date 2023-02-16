<script setup lang="ts">
import router from "@/router";
import {
  tableheaders,
  sortStoresTableItems,
  headerSortColor,
  showSortBtnCondition,
} from "./stores-container";

import Draggable from "vuedraggable";
import useHomeStore from "../useCategoryStore";
import type { StoresTableItem } from "../useCategoryStore.d";

const homeStore = useHomeStore();
const { isDeliveryOrderChangeMode, categoryDistributorTableItems } =
  storeToRefs(homeStore);

const rowSelectedStyle = computed(() => (element: StoresTableItem) => ({
  backgroundColor: element.selected ? "#0080ff11" : "white",
}));

const onClickHeaderSortBtn = sortStoresTableItems;
const onClickStoresTableRow = (element: StoresTableItem) => {
  router.push(categoryDetailURL);
};

const itemsPerPage = ref(50);
/**테이블 정렬 끝 */
</script>

<template>
  <!-- 대시보드 테이블 -->
  <div class="stores-container pa-2">
    <VDataTable
      class="stores-container-table elevation-1 rounded"
      :headers="tableheaders"
      :items="categoryDistributorTableItems"
      item-key="id"
      :items-per-page="itemsPerPage"
    >
      <!-- 테이블 헤더 -->
      <thead>
        <tr>
          <th v-for="header in tableheaders">
            <div
              class="d-flex align-center"
              @click="
                header.sortable && onClickHeaderSortBtn(header.key, 'string')
              "
            >
              <!-- 헤더 타이틀 -->
              <div>
                {{ header.title }}
              </div>
              <!-- 정렬 버튼 -->
              <div class="d-flex flex-column">
                <VIcon
                  v-show="showSortBtnCondition(header)"
                  :color="headerSortColor('asc')"
                  size="12"
                  icon="mdi-chevron-up"
                />
                <VIcon
                  v-show="showSortBtnCondition(header)"
                  :color="headerSortColor('desc')"
                  size="12"
                  icon="mdi-chevron-down"
                />
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <!-- 드래그어블 테이블 바디 -->
      <Draggable
        v-model="categoryDistributorTableItems"
        itemKey="id"
        tag="tbody"
        :disabled="!isDeliveryOrderChangeMode"
      >
        <template #item="{ element }">
          <tr
            @click="onClickStoresTableRow(element)"
            :style="rowSelectedStyle(element)"
          >
            <!-- 유통사 -->
            <td :style="rowSelectedStyle(element)">
              <div class="font-weight-bold" style="width: 64px">
                {{ element.distributorName }}
              </div>
            </td>
            <!-- 코스 -->
            <td :style="rowSelectedStyle(element)">
              <div style="width: 40px">
                {{ element.cource }}
              </div>
            </td>
            <!-- 완료율 -->
            <td :style="rowSelectedStyle(element)">
              <span style="width: 16px">
                {{ element.completeRate }}
              </span>
            </td>
            <!-- 입고확인시간 -->
            <td :style="rowSelectedStyle(element)">
              <span style="width: 16px">
                {{ element.receivingCheckTime }}
              </span>
            </td>
            <!-- 완료 체크박스 -->
            <td :style="rowSelectedStyle(element)">
              <div>
                <VCheckbox @click.stop v-model="element.checked" />
              </div>
            </td>
          </tr>
        </template>
      </Draggable>
    </VDataTable>
  </div>
</template>

<style lang="scss" scoped>
:deep(.stores-container-table th) {
  font-weight: bold !important;
  padding: 6px !important;
  background-color: #fafafa !important;
  font-size: 14px !important;
}

:deep(.stores-container-table td) {
  padding: 6px !important;
  font-size: 14px !important;
}

:deep(.stores-container-table .v-data-table-footer) {
  display: none;
}
</style>
