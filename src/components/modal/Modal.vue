<script setup lang="ts">
import useAppStore from "@/stores/useAppStore";

const appStore = useAppStore();

const { isShowModal } = storeToRefs(appStore);
</script>
<template>
  <div class="modal" v-if="isShowModal">
    <div class="v-overlay__scrim" @click="isShowModal = false"></div>
    <div class="v-dialog">
      <DialogCloseBtn @click="isShowModal = !isShowModal" />
      <VCard title="이슈등록">
        <VCardText>
          <VForm>
            <VRow>
              <VCol cols="6" sm="6" md="4">
                <VSelect
                  :menu-props="{ maxHeight: '400' }"
                  :items="[
                    '이슈타입',
                    '미입고',
                    '오입고',
                    '유통사파손',
                    '본사파손',
                    '재고',
                    '기타',
                    '메모',
                  ]"
                  label="이슈타입"
                  persistent-hint
                />
              </VCol>
              <VCol cols="6" sm="6" md="4">
                <VSelect
                  :menu-props="{ maxHeight: '400' }"
                  :items="['CS 처리전', 'CS 처리중', 'CS 처리완료']"
                  label="CS 처리전"
                  persistent-hint
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <p>미입고</p>
                <div class="issue-type-form">
                  <span class="bold mr-1">13개 </span> 중
                  <VCol cols="4"><VTextField /></VCol>개
                  <span class="bold ml-1">미입고</span>
                </div>
              </VCol>
              <VCol cols="12" sm="6">
                <VTextarea label="추가 메모" />
              </VCol>
            </VRow>
          </VForm>
        </VCardText>

        <VCardText
          class="d-flex justify-end flex-wrap gap-3 align-center modal-footer"
        >
          <p>담당자 <span>Emma</span></p>
          <VBtn @click="isShowModal = false"> 등록 </VBtn>
        </VCardText>
      </VCard>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 31;

  .v-overlay__scrim {
    width: 100%;
    height: 100%;
    background-color: rgba(51, 48, 60, 0.3);
    left: 0;
    top: 0;
  }

  .v-dialog {
    max-height: calc(100% - 48px);
    width: calc(100% - 40px);
    max-width: 600px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    position: absolute;
    pointer-events: auto;
    contain: layout;
  }

  ::v-deep(.v-card-item) {
    padding: 15px;

    .v-card-title {
      font-size: 16px;
      color: #333;
    }
  }
  .v-card-text {
    padding: 0 15px 15px;
  }

  .v-card {
    width: 100%;
    margin: auto;
  }

  .v-card-item {
    padding: 10px;
  }

  .v-row {
    p {
      color: #333;
      margin-bottom: 10px;
      font-weight: 600;
    }
  }

  .issue-type-form {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: #333;

    .v-col {
      padding: 0 5px 0 10px;
    }
  }
  .bold {
    font-weight: 600;
  }

  ::v-deep(textarea.v-field__input) {
    resize: vertical;
  }
}
.modal-footer {
  p {
    margin-right: auto;
    color: #333;
    font-size: 16px;
    margin-bottom: 0;
    span {
      font-weight: 600;
    }
  }
}
</style>
