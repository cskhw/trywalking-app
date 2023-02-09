<script setup lang="ts">
import router from "@/router";
import {
  tableheaders,
  getColor,
  sortStoresTableItems,
  headerSortColor,
  showSortBtnCondition,
} from "./stores-container";

import Draggable from "vuedraggable";
import useHomeStore from "../useHomeStore";
import type { StoresTableItem } from "../useHomeStore.d";
import { uploadURL } from "@/composable/common";

const homeStore = useHomeStore();
const { isDeliveryOrderChangeMode, storesTableItems, isCourceChangeMode } =
  storeToRefs(homeStore);

const rowSelectedStyle = computed(() => (element: StoresTableItem) => ({
  backgroundColor: element.selected ? "#0080ff11" : "white",
}));

const onClickUploadBtn = () => router.push(uploadURL);
const onClickHeaderSortBtn = sortStoresTableItems;
const onClickStoresTableRow = (element: StoresTableItem) => {
  if (isCourceChangeMode.value) element.selected = !element.selected;
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
      :items="storesTableItems"
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
      <Draggable
        v-model="storesTableItems"
        itemKey="id"
        tag="tbody"
        :disabled="!isDeliveryOrderChangeMode"
      >
        <template #item="{ element }">
          <tr
            @click="onClickStoresTableRow(element)"
            :style="rowSelectedStyle(element)"
          >
            <td :style="rowSelectedStyle(element)">
              <div>
                {{ element.id }}
              </div>
            </td>
            <td :style="rowSelectedStyle(element)">
              <div class="font-weight-bold" style="width: 96px">
                {{ element.restaurantName }}
              </div>
            </td>
            <td :style="rowSelectedStyle(element)">
              <span style="width: 16px">
                {{ element.loadingPosition }}
              </span>
            </td>
            <td :style="rowSelectedStyle(element)">
              <div style="width: 16px">
                {{ element.count }}
              </div>
            </td>
            <td :style="rowSelectedStyle(element)">
              <VChip outlined :color="getColor(element.status)">
                {{ element.status }}
              </VChip>
            </td>
            <td :style="rowSelectedStyle(element)">
              <VIcon
                size="30"
                color="#999999"
                icon="mdi-upload"
                @click="onClickUploadBtn"
              ></VIcon>
            </td>
          </tr>
        </template>
      </Draggable>
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

::v-deep(.stores-container-table .v-data-table-footer) {
  display: none;
}
</style>
