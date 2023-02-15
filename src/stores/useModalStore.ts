import { defineStore } from "pinia";
import type { GlobalModal } from "./useModalStore.d";

const initGlobalModal = {
  title: " ",
  contents: "",
  noBtnTxt: "취소",
  yesBtnTxt: "확인",
  noBtnFunc: () => {},
  yesBtnFunc: () => {},
};

export default defineStore("modal", {
  state: () => ({
    // 글로벌 모달
    isShowGlobalModal: false,
    globalModal: {
      ...initGlobalModal,
    } as GlobalModal,
  }),
  getters: {
    getIsShowGlobalModal: (state) => {
      return state.isShowGlobalModal;
    },
  },
  actions: {
    async showGlobalModal() {
      this.isShowGlobalModal = true;
    },
    async hideGlobalModal() {
      this.globalModal = { ...initGlobalModal };
      this.isShowGlobalModal = false;
    },
  },
});
