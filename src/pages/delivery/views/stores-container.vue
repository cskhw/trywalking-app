<script setup lang="ts">
import router from "@/router";
import {
  tableheaders,
  getStatusColor,
  sortStoresTableItems,
  headerSortColor,
  showSortBtnCondition,
  rowSelectedStyle,
  getPositionColor,
} from "./stores-container";

import Draggable from "vuedraggable";
import useDeliveryStore from "../useDeliveryStore";
import type { StoresTableItem } from "../useDeliveryStore.d";
import useModalStore from "@/stores/useModalStore";
import { deliveryDetailURL, deliveryInspectionURL } from "@/composable/common";

const modalStore = useModalStore();
const deliveryStore = useDeliveryStore();

const { isDeliveryOrderChangeMode, storesTableItems } =
  storeToRefs(deliveryStore);

// 이벤트 등록

const onClickHeaderSortBtn = sortStoresTableItems;
const onClickStoresTableRow = (element: StoresTableItem) => {
  router.push(deliveryInspectionURL);
};

const onClickInspectionBtn = () => router.push(deliveryDetailURL);
const onClickUploadBtn = () => router.push(uploadURL);
</script>

<template>
  <!-- 대시보드 테이블 -->
  <div class="stores-container pa-2">
    <VDataTable
      class="stores-container-table elevation-1 rounded"
      :headers="tableheaders"
      :items="storesTableItems"
      item-key="id"
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
            <!-- 순서 -->
            <td :style="rowSelectedStyle(element)">
              <div>
                {{ element.id }}
              </div>
            </td>
            <!-- 식당명 -->
            <td :style="rowSelectedStyle(element)">
              <div class="font-weight-bold" style="width: 84px">
                {{ element.restaurantName }}
              </div>
            </td>
            <!-- 적재 위치 -->
            <td :style="rowSelectedStyle(element)">
              <VChip
                outlined
                :color="getPositionColor(element.loadingPosition)"
              >
                {{ element.loadingPosition }}
              </VChip>
            </td>
            <!-- 수량 -->
            <td :style="rowSelectedStyle(element)">
              <div style="width: 16px">
                {{ element.count }}
              </div>
            </td>
            <!-- 상태 -->
            <td :style="rowSelectedStyle(element)">
              <VChip outlined :color="getStatusColor(element.status)">
                {{ element.status }}
              </VChip>
            </td>
            <!-- 상세 버튼 -->
            <td :style="rowSelectedStyle(element)">
              <VIcon
                size="24"
                color="#999999"
                icon="mdi-document"
                @click.stop="onClickInspectionBtn"
              ></VIcon>
            </td>

            <!-- 배송 버튼 -->
            <td class="pa-0 mr-1" :style="rowSelectedStyle(element)">
              <VIcon
                class="pa-0"
                size="24"
                color="#999999"
                icon="mdi-upload"
                @click.stop="onClickUploadBtn"
              ></VIcon>
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
  padding: 4px !important;
  background-color: #fafafa !important;
  font-size: 14px !important;
}

:deep(.stores-container-table td) {
  padding: 4px !important;
  font-size: 14px !important;
}

:deep(.stores-container-table .v-data-table-footer) {
  display: none;
}
</style>
