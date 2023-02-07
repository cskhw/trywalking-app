<script setup lang="ts">
import colors from "@/styles/colors";
</script>

<template>
  <VRow class="match-height ma-0">
    <VCol class="pa-0" cols="12" md="6">
      <VCard class="pa-4 bg-white rounded-0">
        <div>코스: A-1</div>
        <div>업장명: 나는 오늘도 오더해</div>
        <div>적재: 외</div>
        <div>배송시간: 11시 이전</div>
        <div>촬영시간: 없음</div>
      </VCard>
    </VCol>

    <VCol class="pa-0" cols="12" md="6" style="height: 100%">
      <VCard class="pa-4 bg-grey-lighten-3 rounded-0">
        <VCardTitle class="pa-0 pt-2 text-h5 font-weight-bold text-black">
          특이사항
        </VCardTitle>
        <VCardText class="upload-description pa-0 pt-2"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae
          commodi nihil iste optio ea inventore error quis sequi deleniti,
          accusamus et quae esse corporis! Inventore animi deleniti nesciunt
          molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Iure, maiores. Quis nisi, iure facilis doloremque cum officiis minima
          omnis, totam voluptas, non aspernatur? Harum magni recusandae
          quibusdam ex, voluptatibus quisquam.
        </VCardText>
      </VCard>
    </VCol>
    <VCol class="mt-1" cols="12" md="6">
      <VCard class="d-center pa-4" style="border: 1px dashed #e0e0e0"
        ><VIcon size="80%" icon="mdi-cloud-upload-outline"></VIcon>
      </VCard>
    </VCol>

    <VCol
      class="d-flex justify-space-between pa-4 pt-2"
      cols="12"
      md="6"
      style="height: 100%"
    >
      <VBtn
        class="mr-2 text-h6"
        style="width: 50%; height: 52px; font-weight: bold !important"
        :style="{ color: colors.x33 + ' !important' }"
        color="white"
        flat
      >
        올리기
      </VBtn>
      <VBtn
        class="mr-2 text-h6 font-weight-bold"
        style="width: 50%; height: 52px"
      >
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
