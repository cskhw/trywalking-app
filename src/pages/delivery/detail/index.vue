<template>
  <div class="picking-list-wrap">
    <h1>
      <p class="title">오더히어로 [왕십리] A-1</p>
    </h1>

    <VRow>
      <VCol md="6" lg="8" cols="12">
        <VCard style="height: 100%">
          <v-expansion-panels v-model="isShowPanel" multiple>
            <PickingListStoreInfo></PickingListStoreInfo>
            <PickingListDeliveryInfo></PickingListDeliveryInfo>
          </v-expansion-panels>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<script setup lang="ts">
import PickingListStoreInfo from "@/pages/delivery/detail/views/PickingListStoreInfo.vue";
import PickingListDeliveryInfo from "@/pages/delivery/detail/views/PickingListDeliveryInfo.vue";

// 패널 열기 로컬스토리지에 저장
const localPanel = localStorage.getItem("isShowPanel");

const isShowPanel = ref([0, 1]);

if (localPanel) {
  isShowPanel.value = JSON.parse(localPanel);
}

watch(isShowPanel, (newVal) => {
  console.log(newVal);
  localStorage.setItem("isShowPanel", JSON.stringify(newVal));
});
</script>

<style lang="scss" scoped>
.picking-list-wrap {
  width: 100%;
  margin-bottom: 40px;
  z-index: 11;
  background-color: #f8f7fa;

  h1 {
    display: flex;
    justify-content: space-between;

    .title {
      font-size: 19px;
      font-weight: 600;
      margin: 0;
      line-height: 46px;
      padding-left: 20px;
    }
  }

  > .v-row {
    height: calc(100% - 19px);

    > div {
      height: 100%;
    }
  }

  .v-col {
    padding: 5px 12px;
    color: #333;
    font-weight: 500;
  }

  :deep(.v-badge--inline .v-badge__badge) {
    margin: 0 0 3px 8px;
  }
}
:deep(.v-card) {
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  height: 100%;
  padding-top: 15px;
}

.picking-list {
  background-color: #f8f7fa;

  .v-card-text {
    padding: 0;
  }
}
.dashboard-wrap {
  display: flex;
  align-content: center;
  padding: 15px 12px;
  width: 100%;
  .picking-status {
    flex: 1;
    text-align: center;
    color: #000;
    box-shadow: 0 3px 9px 1px var(--v-shadow-key-umbra-opacity),
      0 9px 8px var(--v-shadow-key-penumbra-opacity),
      0 1px 6px 4px var(--v-shadow-key-ambient-opacity);
    padding: 10px;
    margin-right: 10px;
    background-color: #fff;

    &:last-child {
      flex: 2;
      padding: 10px 15px;
      margin-right: 0;

      p {
        display: flex;
        align-content: center;
      }
      .v-chip {
        padding: 0 5px;
        margin-right: 5px;
      }
      span {
        font-weight: 600;
        padding-left: 30px;
      }
    }

    p {
      font-size: 17px;
      font-weight: 600;
      margin-bottom: 5px;
    }
    span {
      font-size: 20px;
      font-weight: 700;
    }

    ul {
      display: flex;
      align-content: center;
      justify-content: space-between;
    }
  }
}
</style>
