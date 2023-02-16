<template>
  <v-expansion-panel>
    <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus"
      >업장 정보
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-row>
        <v-col cols="4">주문일자</v-col>
        <v-col cols="8">2023-01-13 09:11:55</v-col>
        <v-col cols="4">매장명</v-col>
        <v-col cols="8">오더히어로 (왕십리) A-1</v-col>
        <v-col cols="4">배송시간</v-col>
        <v-col cols="8">1차 / 11시 이전</v-col>
        <v-col cols="4">주문금액</v-col>
        <v-col cols="8">178,000</v-col>
        <v-col cols="4">주소</v-col>
        <v-col cols="8">서울시 성동구 상원12길 1 3층</v-col>
        <v-col cols="4">요청사항</v-col>
        <v-col cols="8">-</v-col>
        <v-col cols="4">관리자 메모</v-col>
        <v-col cols="8">없음</v-col>
        <v-col cols="4">인도처 정보</v-col>
        <v-col cols="8">비밀번호 1234</v-col>
      </v-row>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<style lang="scss" scoped>
.picking-list-wrap {
  .v-col {
    padding: 5px 12px;
    color: #333;
    font-weight: 500;
  }
}
</style>
