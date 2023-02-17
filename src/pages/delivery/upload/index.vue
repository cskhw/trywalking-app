<script setup lang="ts">
import colors from "@/styles/colors";
</script>

<template>
  <VRow style="height: 90%" class="d-center match-height ma-0" rows="5">
    <VCol class="mt-1" cols="12" md="6">
      <VCard class="d-center pa-4" style="border: 1px dashed #e0e0e0"
        ><VIcon size="100%" icon="mdi-cloud-upload-outline"></VIcon>
      </VCard>
    </VCol>
  </VRow>

  <VRow class="d-center match-height ma-0">
    <VCol
      class="d-flex justify-space-between pa-4 pt-2"
      cols="12"
      md="6"
      style="height: 100%"
    >
      <VBtn
        class="mr-2 text-h6"
        style="height: 52px; font-weight: bold !important; flex: 1"
        :style="{ color: colors.x33 + ' !important' }"
        color="white"
        flat
      >
        올리기
      </VBtn>
      <VBtn class="text-h6 font-weight-bold" style="height: 52px; flex: 1">
        사진 촬영하기
      </VBtn>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
@use "@core/scss/template/libs/apex-chart.scss";

.upload-description {
  height: 96px;
  overflow: auto;
}
</style>
