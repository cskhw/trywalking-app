<template>
  <div
    class="d-table"
    :style="[tableStyles?.tableStyle || {}]"
    @click="onClickTable"
  >
    <!-- header -->
    <div
      class="d-table-header"
      :style="[tableStyles?.tHeaderStyle || {}]"
      @click="onClickTheader"
    >
      <div
        class="d-table-th"
        v-for="(header, i) of headers"
        :key="i"
        :style="[tableStyles?.thStyle ? tableStyles?.thStyle(i) : {}]"
        @click="() => onClickTh(header)"
      >
        <slot name="header" :idx="i" :header="header"
          ><div v-html="header"></div
        ></slot>
      </div>
    </div>
    <!-- body -->
    <div
      class="d-table-body"
      :style="[tableStyles?.tBodyStyle || {}]"
      @click="onClickTBody"
    >
      <!-- tr -->
      <div
        v-for="(row, i) of modelValue"
        class="d-table-tr"
        :style="[tableStyles?.trStyle ? tableStyles.trStyle(i) : {}]"
        @click="() => onClickTr(row)"
      >
        <!-- td -->
        <div
          class="d-table-td"
          v-for="(td, _, j) in row"
          :style="[
            tableStyles?.columnStyle ? tableStyles.columnStyle(j) : {},
            tableStyles?.tdStyle ? tableStyles.tdStyle(i, j) : {},
          ]"
          @click="() => onClickTd(td)"
        >
          <slot name="td" :rIdx="i" :cIdx="j" :td="td"
            ><div v-html="td"></div
          ></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DTableStyles } from "@/components/DTable";

// props 데이터 없을 때 초기값 설정
const props = defineProps<{
  headers: string[];
  modelValue: { [key: string]: any }[];
  tableStyles?: DTableStyles;
}>();

// emits
const emit = defineEmits<{
  (e: "clickTable", items: { [key: string]: any }[]): void;
  (e: "clickTheader", headers: any[]): void;
  (e: "clickTh", item: any): void;
  (e: "clickTbody", item: any): void;
  (e: "clickTr", item: any): void;
  (e: "clickTd", item: any): void;
  (e: "update:modelValue", modelValue: any): void;
}>();

const onClickTable = () => {
  emit("clickTable", props.modelValue);
};

const onClickTheader = () => {
  emit("clickTheader", props.headers);
};

const onClickTh = (header: any) => {
  emit("clickTh", header);
};

const onClickTBody = () => {
  emit("clickTbody", props.modelValue);
};

const onClickTr = (row: any) => {
  emit("clickTr", row);
};
const onClickTd = (td: any) => {
  emit("clickTd", td);
};
</script>
<style lang="scss">
@import "@/styles/colors.scss";

.d-table {
  display: flex;
  flex-direction: column;

  width: max-content;

  outline: 1px solid $r-table-border;
  border-radius: 0.25rem;
  .d-table-header {
    display: flex;
    width: max-content;
    .d-table-th {
      padding: 0.5rem 0.75rem;
      border-right: 1px solid $r-table-border;
      border-bottom: 1px solid $r-table-border;
    }
    .d-table-th:last-child {
      border-right: none;
    }
  }
  .d-table-body {
    .d-table-tr {
      display: flex;
      border-bottom: 1px solid $r-table-border;
      .d-table-td {
        padding: 0.5rem 0.75rem;
        border-right: 1px solid $r-table-border;
      }
      .d-table-td:last-child {
        border-right: none;
      }
    }
    .d-table-tr:last-child {
      border-bottom: none;
    }
  }
}
</style>
