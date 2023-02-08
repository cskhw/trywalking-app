<script setup lang="ts">
import router from "@/router";
import { tableItems, tableheaders, getColor } from "./stores-container";
import Draggable from "vuedraggable";
import { sortObjectArray } from "@/@core/utils/appUtils";

const drag = ref(false);
const onClickUploadBtn = () => router.push("/home/upload");

/**테이블 정렬 */
const orgTableItems = ref([...tableItems.value]);

// 헤더 정렬 정보
const showSortBtnCondition = computed(
  () => (header: { key: string; sortable: boolean }) =>
    header.sortable && headerSortMeta.value.key === header.key
);

const headerSortMeta = ref({
  key: "",
  orderBy: "",
});

// 헤더 정렬 버튼 색
const headerSortColor = computed(
  () => (orderBy: string) =>
    headerSortMeta.value.orderBy == orderBy ? "black" : "grey"
);

const onClickHeaderSortBtn = (key: string, type: string) => {
  let orderBy = "";

  // 정렬 키가 달라지면 정렬 초기화
  if (headerSortMeta.value.key !== key) {
    console.log(headerSortMeta.value.key !== key);
    console.log(tableItems.value, orgTableItems.value);
    tableItems.value = [...orgTableItems.value];
    headerSortMeta.value.orderBy = orderBy;
  }

  headerSortMeta.value.key = key;

  // 정렬 오더에 맞게 변수 초기화
  if (headerSortMeta.value.orderBy === "asc") {
    orderBy = "desc";
    headerSortMeta.value.orderBy = orderBy;
  } else if (headerSortMeta.value.orderBy === "desc") {
    orderBy = "";
    headerSortMeta.value.orderBy = orderBy;
    headerSortMeta.value.key = "";
  } else if (headerSortMeta.value.orderBy === "") {
    orderBy = "asc";
    headerSortMeta.value.orderBy = orderBy;
  }

  // 테이블 정렬 처리
  if (orderBy === "") {
    tableItems.value = [...orgTableItems.value];
  } else {
    sortObjectArray(tableItems.value, key, type, orderBy);
  }
};
/**테이블 정렬 끝 */
</script>

<template>
  <!-- 대시보드 테이블 -->
  <div class="stores-container pa-2">
    {{ headerSortMeta }}
    <VDataTable
      class="stores-container-table elevation-1 rounded"
      :headers="tableheaders"
      :items="tableItems"
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
      <Draggable
        itemKey="id"
        tag="tbody"
        :list="tableItems"
        @start="drag = true"
        @end="drag = false"
      >
        <template #item="{ element }">
          <tr>
            <td>
              <div>
                {{ element.id }}
              </div>
            </td>
            <td>
              <div class="font-weight-bold" style="width: 96px">
                {{ element.storeName }}
              </div>
            </td>
            <td>
              <span style="width: 16px">
                {{ element.loadingPosition }}
              </span>
            </td>
            <td>
              <div style="width: 16px">
                {{ element.count }}
              </div>
            </td>
            <td>
              <VChip outlined :color="getColor(element.status)">
                {{ element.status }}
              </VChip>
            </td>
            <td>
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
</style>
