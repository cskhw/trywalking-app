<script setup lang="ts">
import router from "@/router";
import {
  tableheaders,
  sortStoresTableItems,
  headerSortColor,
  showSortBtnCondition,
} from "./stores-container";

import Draggable from "vuedraggable";
import useCategoryStore from "../useUserListStore";
import type {
  CategoryDistributorTableItem,
  StoresTableItem,
} from "../useUserLIstStore";
import useModalStore from "@/stores/useModalStore";

const categoryStore = useCategoryStore();
const modalStore = useModalStore();

const { isDeliveryOrderChangeMode, categoryDistributorTableItems } =
  storeToRefs(categoryStore);

const { globalModal } = storeToRefs(modalStore);

const rowSelectedStyle = computed(() => (element: StoresTableItem) => ({
  backgroundColor: element.selected ? "#0080ff11" : "white",
}));

const onClickHeaderSortBtn = sortStoresTableItems;
const onClickStoresTableRow = (element: StoresTableItem) => {
  router.push(categoryDetailURL);
};

const itemsPerPage = ref(50);
/**테이블 정렬 끝 */

const onClickCompleteCheckBox = (
  e: Event,
  element: CategoryDistributorTableItem
) => {
  e.stopPropagation();
  e.preventDefault();
  globalModal.value.show();

  nextTick(() => {
    globalModal.value.noBtnTxt = "닫기";
    if (element.checked) {
      globalModal.value.title = "정말 취소하시겠습니까?";
      globalModal.value.yesBtnTxt = "취소";
    } else {
      globalModal.value.title = "정말 완료하시겠습니까?";
      globalModal.value.yesBtnTxt = "완료";
    }
    globalModal.value.yesBtnFunc = async () => {
      element.checked = !element.checked;
      globalModal.value.hide();

      //TODO: 전체 입고체크 완료하는 api 넣기
    };
  });
};
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
                <VCheckbox
                  @click="(e:Event) => onClickCompleteCheckBox(e, element)"
                  v-model="element.checked"
                />
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
