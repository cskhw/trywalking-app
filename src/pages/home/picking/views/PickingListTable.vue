<template>
  <div class="list-filter-wrap">
    <VCheckbox label="피킹전 상품" color="primary" />
    <VCheckbox label="상온" color="primary" v-model="checkboxOne" />
    <VCheckbox label="냉장" color="primary" v-model="checkboxOne" />
    <VCheckbox label="냉동" color="primary" v-model="checkboxOne" />

    <div class="list-sorting-btn">
      <v-radio-group inline v-model="radioGroup">
        <v-radio
          label=""
          value="listtype1"
          true-icon="mdi-view-list"
          false-icon="mdi-view-list"
          @click="isHidden = false"
        >
        </v-radio>
        <v-radio
          label=""
          value="listtype2"
          false-icon="mdi-view-sequential"
          true-icon="mdi-view-sequential"
          @click="isHidden = !isHidden"
          class="ml-0"
        ></v-radio>
      </v-radio-group>
    </div>
  </div>

  <div class="list-table">
    <div class="thead">
      <div class="tr">
        <!-- <div class="th th-turn" v-if="!isHidden">순번</div> -->
        <div class="th th-img">유통사<br />상품사진</div>
        <div class="th th-info">상품명/상세/중량</div>
        <div class="th th-count">수량</div>
        <div class="th th-classify">분류</div>
        <div class="th th-status">피킹</div>
      </div>
    </div>
    <div class="tbody">
      <div class="tr">
        <!-- <div class="td td-turn" v-if="!isHidden">1</div> -->
        <div class="td td-img">
          <span>해담채</span>
          <p v-if="!isHidden">
            <img
              src="https://orderherodl.cafe24.com/images/prodPicture/dc120ebf2ea89e3843ad550e4f0773c7dcd6a93b7d17ada2707fbb56a7d04f09.png"
              alt="상품사진"
            />
          </p>
        </div>
        <div class="td td-info">
          <span class="bold">새송이버섯</span>/--/국산 /
          <span class="bold">2kg</span>
        </div>
        <div class="td td-count">1</div>
        <div class="td td-classify frozen">
          <VBtn rounded="pill" color="info"> 냉동 </VBtn>
        </div>
        <div class="td td-status">
          <VBtn color="secondary"> 피킹전 </VBtn>
        </div>
        <div class="issue-btn">
          <VBtn variant="outlined" color="primary" @click="isShowModal = true">
            이슈 등록
          </VBtn>
        </div>
      </div>

      <div class="tr">
        <!-- <div class="td td-turn" v-if="!isHidden">2</div> -->
        <div class="td td-img">
          <span>이너피스</span>
          <p v-if="!isHidden">
            <img
              src="https://orderherodl.cafe24.com/images/prodPicture/dc120ebf2ea89e3843ad550e4f0773c7dcd6a93b7d17ada2707fbb56a7d04f09.png"
              alt="상품사진"
            />
          </p>
        </div>
        <div class="td td-info">
          <span class="bold">새송이버섯</span>/--/국산 /
          <span class="bold">2kg</span>
        </div>
        <div class="td td-count">1</div>
        <div class="td td-classify">-</div>
        <div class="td td-status">
          <VBtn color="success"> 완료 </VBtn>
        </div>
        <div class="issue-btn">
          <VBadge content="1" color="error">
            <VBtn
              variant="outlined"
              color="primary"
              @click="isShowModal = true"
            >
              이슈 등록
            </VBtn>
          </VBadge>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useAppStore from "@/stores/useAppStore";

const isHidden = ref(false);

const appStore = useAppStore();

const { isShowModal } = storeToRefs(appStore);

const selectedOptions = ref(["이슈타입"]);

const states = [
  "이슈타입",
  "미입고",
  "오입고",
  "유통사파손",
  "본사파손",
  "재고",
  "기타",
  "메모",
];

const checkboxOne = ref(true);

const radioGroup = ref("listtype1");
</script>

<style lang="scss" scoped>
.list-filter-wrap {
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 5px 12px 0;

  .v-input {
    flex: auto;
    color: #000;
    font-weight: 600;
    .v-label {
      color: #333;
    }
  }
  .v-input__control {
    margin-right: 0;

    .v-selection-control {
      margin-right: 0;
      width: 30px;
    }
  }
}

@media (max-width: 380px) {
  .list-filter-wrap {
    ::v-deep(.v-selection-control .v-label) {
      font-size: 14px;
    }
  }
}
.list-table {
  background: #fff;
  padding: 0 12px;
  .thead {
    .tr {
      display: flex;
      align-items: end;
      justify-content: space-between;
      border-bottom: 1px solid #333;
    }
    .th {
      padding: 10px 5px;
      color: #333;
      font-weight: 600;
      line-height: 1.2;

      &.th-turn {
        width: 11%;
      }
      &.th-img {
        width: 22%;
      }
      &.th-info {
        width: 38%;
      }
      &.th-count {
        width: 11%;
      }
      &.th-classify {
        width: 14%;
      }
      &.th-status {
        width: 16%;
      }
    }
  }

  .tbody {
    .tr {
      display: flex;
      justify-content: space-between;

      position: relative;
      min-height: 100px;
      border-bottom: 1px solid #c1c0c0;

      .td {
        padding: 10px 2.5px;
        color: #333;
        width: 15%;

        &.td-turn {
          width: 11%;
          text-align: center;
        }
        &.td-img {
          width: 22%;
        }
        &.td-info {
          width: 38%;
        }
        &.td-count {
          width: 11%;
          text-align: center;
        }
        &.td-classify {
          width: 14%;
        }
        &.td-status {
          width: 16%;
          text-align: center;
        }

        p {
          width: 100%;
          height: 75px;
          border: 1px solid #ddd;
          margin-bottom: 0;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }

        .bold {
          font-weight: 700;
        }

        .v-btn {
          min-width: auto;
          padding: 0 5px;
          height: 34px;
          font-weight: 600;
        }

        &.frozen {
          .v-btn {
            min-width: 45px;
          }
        }
      }

      .issue-btn {
        position: absolute;
        right: 0;
        bottom: 10px;

        .v-btn {
          padding: 0 10px;
          font-weight: 600;
          height: 34px;
        }
      }
    }
  }
}
</style>
