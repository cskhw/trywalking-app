import { state } from "@/views/demos/forms/form-elements/textfield/demoCodeTextfield";
import { defineStore } from "pinia";
import type { GlobalModal } from "./useModalStore.d";

const initGlobalModal = {
  isShow: false,
  title: " ",
  contents: [],
  noBtnTxt: "",
  yesBtnTxt: "",
  noBtnFunc: () => {},
  yesBtnFunc: () => {},
  hide: function () {
    this.isShow = false;
  },
  show: function () {
    this.isShow = true;
  },
};

export default defineStore("modal", {
  state: () => ({
    // 글로벌 모달
    isShowGlobalModal: false,
    globalModal: {
      ...initGlobalModal,
    } as GlobalModal,
  }),
  getters: {},
  actions: {},
});
