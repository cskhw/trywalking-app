<script setup lang="ts">
import useModalStore from "@/stores/useModalStore";

const modalStore = useModalStore();

const { globalModal } = storeToRefs(modalStore);

globalModal.value.noBtnFunc = () => {
  modalStore.hideGlobalModal();
};

globalModal.value.yesBtnFunc = () => {
  modalStore.hideGlobalModal();
};
</script>
<template>
  <div class="modal">
    <div class="v-overlay__scrim" @click="modalStore.hideGlobalModal()"></div>
    <div class="v-dialog">
      <DialogCloseBtn @click="modalStore.hideGlobalModal()" />
      <VCard :title="globalModal.title">
        <VCardText v-html="globalModal.contents"> </VCardText>

        <VCardText
          class="d-flex justify-end flex-wrap gap-3 align-center modal-footer"
        >
          <!-- 아니오 버튼 -->
          <VBtn @click="globalModal.noBtnFunc">
            {{ globalModal.noBtnTxt }}
          </VBtn>
          <!-- 예 버튼 -->
          <VBtn @click="globalModal.yesBtnFunc">
            {{ globalModal.yesBtnTxt }}
          </VBtn>
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

  :deep(.v-card-item) {
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

  :deep(textarea.v-field__input) {
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
