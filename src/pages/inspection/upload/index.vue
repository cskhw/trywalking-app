<script setup lang="ts">
import colors from "@/styles/colors";
</script>

<template>
  <VRow class="match-height ma-0">
    <VCol class="pa-0" cols="12" md="6">
      <VCard class="pa-4 bg-white rounded-0">
        <VCardTitle class="pa-0 text-h6 font-weight-bold text-black">
          배송정보
        </VCardTitle>
        <div class="pt-1">
          <div>코스: A-1</div>
          <div>업장명: 나는 오늘도 오더해</div>
          <div>적재 위치: 내</div>
          <div>배송시간: 1차 / 11시 이전</div>
          <div>촬영시간: 없음</div>
          <div>출입 사항 구분: 도어락</div>
          <div>도어락 비밀번호: 60658792*</div>
          <div class="font-weight-bold">관리자메모: 월요일 휴무 배송X</div>
          <div>인도처정보:</div>
        </div>
      </VCard>
    </VCol>

    <VCol class="pa-0" cols="12" md="6" style="height: 100%">
      <VCard class="pa-4 bg-grey-lighten-3 rounded-0">
        <VCardTitle class="pa-0 text-h6 font-weight-bold text-black">
          특이사항
        </VCardTitle>
        <VCardText class="upload-description pa-0 pt-1"
          >오픈은 11시 ~ 11:30 ( 비밀번호 손바닥 대고 , 60658792* / 닫을 때
          손바닥 대고 , 문 꼭 닫혔는지 확인)제품 테이블에 적재 요청. (냉동만
          냉동고에 적재요청) 냉동만 냉동고에 적재 , 냉동고 적재 공간 부족 시에는
          상온 보관 가능
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
