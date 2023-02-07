<script setup lang="ts">
import colors from "@/styles/colors";
import {
  tableHeaders,
  tableValue,
  getTypeChipColor,
  getTagChipColor,
} from "./total-picking";

const onClickTagBtn = (picking: any) => {
  alert(picking.storeName);
};
</script>

<template>
  <VCard class="search-container" color="white" style="height: 99%">
    <VRow class="total-picking match-height ma-0">
      <!--  -->
      <VCol class="d-flex justify-space-evenly pa-4" cols="12">
        <VSwitch label="미완료 포함만 보기" />
        <VBtn>전체 완료하기</VBtn>
      </VCol>
      <VCol class="pa-0" cols="12">
        <VTable
          class="total-picking-table pa-2 pt-0 elevation-1 rounded-0"
          :headers="tableHeaders"
          :items="tableValue"
        >
          <thead>
            <th v-for="header in tableHeaders">{{ header.title }}</th>
          </thead>
          <tbody>
            <template v-for="row in tableValue" :key="row.id">
              <tr>
                <template v-for="(item, key) in row">
                  <td v-if="key !== 'pickingList'">
                    <!-- 순번 -->
                    <template v-if="key === 'id'">
                      <div style="white-space: nowrap">
                        {{ item }}
                      </div>
                    </template>

                    <!-- 유통사 -->
                    <template v-else-if="key === 'distributor'">
                      <div style="min-width: 52px">
                        {{ item }}
                      </div>
                    </template>

                    <!-- 품명 -->
                    <template v-else-if="key === 'productName'">
                      <div class="font-weight-bold" style="min-width: 52px">
                        {{ item }}
                      </div>
                    </template>

                    <!-- 상세 -->
                    <template v-else-if="key === 'detail'">
                      <div style="width: 64px">
                        {{ item }}
                      </div>
                    </template>

                    <!-- 분류 -->
                    <template v-else-if="key === 'type'">
                      <VChip
                        v-if="item === '냉동'"
                        outlined
                        :color="getTypeChipColor(item)"
                      >
                        {{ item }}
                      </VChip>
                    </template>

                    <!-- 품명 -->
                    <template v-else> {{ item }} </template>
                  </td>
                </template>
              </tr>
              <!-- 상품 태그 박스 -->
              <tr>
                <td :colspan="tableHeaders?.length">
                  <template v-for="picking of row?.pickingList">
                    <VChip
                      class="ma-1"
                      outlined
                      :color="getTagChipColor(picking?.status)"
                      @click="onClickTagBtn(picking)"
                    >
                      {{ picking.storeName }}
                      {{ picking.productCount }}
                      {{ picking.status }}
                    </VChip>
                  </template>
                </td>
              </tr>
            </template>
          </tbody>
        </VTable>
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss" scoped>
@use "@core/scss/template/libs/apex-chart.scss";

.upload-description {
  height: 96px;
  overflow: auto;
}

::v-deep(.total-picking-table th) {
  font-weight: bold !important;
  padding: 4px !important;
  background-color: #fafafa !important;
  font-size: 14px !important;
}

::v-deep(.total-picking-table td) {
  padding: 4px !important;
  font-size: 14px !important;
}
</style>
