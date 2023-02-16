<script setup lang="ts">
import {
  tableheaders,
  sortStoresTableItems,
  headerSortColor,
  showSortBtnCondition,
} from "./detail-container";

import type { CategoryStoreTableItem } from "../useCategoryStore.d";
import useCategoryStore from "../useCategoryStore";

const categoryStore = useCategoryStore();
const { categoryStoreTableItems: categoryStoresTableItems } =
  storeToRefs(categoryStore);

const rowSelectedStyle = computed(() => (element: CategoryStoreTableItem) => ({
  backgroundColor: element.checked ? "#0080ff11" : "white",
}));

const onClickHeaderSortBtn = sortStoresTableItems;

const onClickStoresTableRow = (row: CategoryStoreTableItem) => {
  row.checked = !row.checked;
};

const itemsPerPage = ref(50);
/**테이블 정렬 끝 */

const searchQuery = ref("");
</script>

<template>
  <VCard
    class="search-container pa-4 pb-2"
    color="white"
    style="border-radius: 0px 0px 24px 24px; white-space: nowrap"
  >
    <!-- 검색창 -->
    <VRow class="px-2 pt-6">
      <VBtn style="width: 56px; height: 40px" class="mr-1">초기화</VBtn>
      <VTextField
        class="mr-1"
        v-model="searchQuery"
        append-inner-icon="mdi-search"
      />
      <VBtn style="width: 48px; height: 40px">검색</VBtn>
    </VRow>
    <VRow class="pt-1">
      <!-- 상품 테이블 테이블 -->
      <VCol class="pa-0">
        <div class="stores-container pa-2">
          <VDataTable
            class="stores-container-table elevation-1 rounded mb-4"
            :headers="tableheaders"
            :items="categoryStoresTableItems"
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
                      header.sortable &&
                        onClickHeaderSortBtn(header.key, 'string')
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
            <tr
              v-for="row in categoryStoresTableItems"
              @click="onClickStoresTableRow(row)"
              :style="rowSelectedStyle(row)"
            >
              <!-- 이미지 -->
              <td style="width: 60px" :style="rowSelectedStyle(row)">
                <div class="font-weight-bold" style="width: 60px">
                  <img
                    style="width: 60px; height: 60px; background-color: black"
                    :src="row.image"
                  />
                </div>
              </td>
              <!-- 상품명 -->
              <td :style="rowSelectedStyle(row)">
                <div style="font-weight: bold; white-space: normal">
                  {{ row.name }}
                </div>
              </td>
              <!-- 주문수량 -->
              <td style="width: 16px" :style="rowSelectedStyle(row)">
                <span>
                  {{ row.count }}
                </span>
              </td>
            </tr>
          </VDataTable>
        </div>
      </VCol>
    </VRow>
  </VCard>
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
