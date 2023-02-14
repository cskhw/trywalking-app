<template>
  <div class="picking-list-wrap">
    <h1>
      <p class="title">오더히어로 [왕십리] A-1</p>
    </h1>

    <VRow>
      <VCol md="6" lg="8" cols="12">
        <VCard>
          <VRow no-gutters>
            <VCol cols="12" sm="8" md="12" lg="7" order="2" order-lg="1">
              <v-expansion-panels v-model="isShowPanel" multiple>
                <PickingListStoreInfo></PickingListStoreInfo>
                <PickingListDeliveryInfo></PickingListDeliveryInfo>
              </v-expansion-panels>
            </VCol>

            <VCol
              cols="12"
              sm="8"
              md="12"
              lg="7"
              order="2"
              order-lg="1"
              class="picking-list"
            >
              <VCardText>
                <div class="dashboard-wrap">
                  <div class="picking-status">
                    <p>피킹상태</p>
                    <span>3 / 43</span>
                  </div>
                  <div class="picking-status">
                    <ul>
                      <li>
                        <p>
                          <VChip color="error">
                            <VIcon center size="16" icon="mdi-thermometer" />
                          </VChip>
                          상온
                        </p>
                        <span>36</span>
                      </li>
                      <li>
                        <p>
                          <VChip color="info">
                            <VIcon center size="16" icon="mdi-water" />
                          </VChip>
                          냉장
                        </p>
                        <span>3</span>
                      </li>
                      <li>
                        <p>
                          <VChip color="default">
                            <VIcon center size="16" icon="mdi-snowflake" />
                          </VChip>
                          냉동
                        </p>
                        <span>4</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </VCardText>

              <VCardText>
                <PickingListTable></PickingListTable>
              </VCardText>
            </VCol>
          </VRow>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<script setup lang="ts">
import PickingListTable from "@/pages/delivery/picking/views/PickingListTable.vue";
import PickingListStoreInfo from "@/pages/delivery/picking/views/PickingListStoreInfo.vue";
import PickingListDeliveryInfo from "@/pages/delivery/picking/views/PickingListDeliveryInfo.vue";

const isShowPanel = ref([0, 1]);
</script>

<style lang="scss" scoped>
.picking-list-wrap {
  width: 100%;
  height: calc(100% - 60px);
  left: 0;
  top: 0;
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
