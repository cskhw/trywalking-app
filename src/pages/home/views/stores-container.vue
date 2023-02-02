<script setup lang="ts">
import DTable from "@/components/DTable.vue";
import { storeTableStyle } from "@/pages/home/home";
import { json } from "stream/consumers";
import { VIcon } from "vuetify/components/VIcon";

const tableheaders = ref([
  "순서",
  "매장명",
  "적재",
  "수량",
  "금액",
  "피킹",
  "사진",
]);

const pickingHTML = (status: string) =>
  `<div style='background-color: #FFC107; padding: 2px; border-radius: 8px; font'>${status}</div>`;

const cameraIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" tag="i" class="v-icon notranslate v-theme--light text-gray iconify iconify--mdi" width="1em" height="1em" viewBox="0 0 24 24" data-v-c7279bfe="" style="font-size: 36px; height: 36px; width: 36px;"><path fill="gray" d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m8 3a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 2a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3Z"></path></svg>`;

const tableValue = ref([
  {
    id: "A-1",
    store: "오",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
]);
</script>

<template>
  <!-- 대시보드 테이블 -->
  <DTable
    class="pa-2 pt-3"
    v-model="tableValue"
    style="color: black"
    :headers="tableheaders"
    :table-styles="storeTableStyle"
  >
  </DTable>
</template>

<style lang="scss" scoped>
::v-deep(.search-container-driver-dashboard .v-btn__content) {
  width: 100%;
}
</style>
