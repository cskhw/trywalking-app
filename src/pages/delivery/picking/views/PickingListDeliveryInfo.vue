<template>
  <v-expansion-panel>
    <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
      <v-badge inline :content="3" color="error"> 배송 정보 </v-badge>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-row>
        <v-col cols="4">
          <VBadge dot color="error" floating> 전재 위치 </VBadge>
        </v-col>
        <v-col cols="8">내부적재</v-col>
        <v-col cols="4">
          <VBadge dot color="error" floating> 출입 사항 구분 </VBadge>
        </v-col>
        <v-col cols="8">직접입력</v-col>
        <v-col cols="4">
          <VBadge dot color="error" floating> 직접 입력 </VBadge>
        </v-col>
        <v-col cols="8"
          >사장님 있을 때는 직접 전달. 부재중일 시 비밀 번호 1234 누르고 카운터
          밑에 적재</v-col
        >
        <v-col cols="4">
          <VBadge dot color="error" floating> 특이사항 </VBadge>
        </v-col>
        <v-col cols="8">-</v-col>

        <v-col cols="4">
          <VBadge dot color="error" floating> 매장 외부</VBadge>
        </v-col>
        <v-col cols="8">내부적재</v-col>

        <v-col cols="12">
          <ul class="img-wrap">
            <li class="">
              <span class="img-title">매장 외부</span>
              <p class="img">
                <img src="" alt="" />
              </p>
            </li>
            <li class="">
              <span class="img-title">상온 적재 위치</span>
              <p class="img">
                <img src="" alt="" />
              </p>
            </li>
            <li class="">
              <span class="img-title">냉장 적재 위치</span>
              <p class="img">
                <img src="" alt="" />
              </p>
            </li>
            <li class="">
              <span class="img-title">냉동 적재 위치</span>
              <p class="img">
                <img src="" alt="" />
              </p>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.v-col {
  padding: 5px 12px;
  color: #333;
  font-weight: 500;
}

.img-wrap {
  display: flex;
  align-content: center;
  overflow-x: auto;
  padding-bottom: 15px;

  li {
    margin-right: 15px;
    .title {
      display: block;
    }
    .img {
      position: relative;
      width: 117px;
      height: 117px;
      text-align: center;
      background-color: #ececec;
      margin-bottom: 0;

      :before {
        clear: both;
        display: block;
        content: "";
        width: 14px;
        height: 14px;
        background: url(../../../../assets/images/icons/pickling-list/zoom-icon.png)
          no-repeat;
        background-position: center;
        background-size: cover;
        position: absolute;
        right: 5px;
        top: 5px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
