import type { CategoryStoresTableItem } from "./useCategoryStore.d";

export default defineStore("home", {
  state: () => ({
    isDeliveryOrderChangeMode: false,
    isCourceChangeMode: false,
    dashboardTableItems: [
      { a: "image1", b: "오레가노럽드(건오레가노)", c: "2" },
      { a: "image2", b: "오레가노럽드(건오레가노)", c: "2" },
      { a: "image3", b: "오레가노럽드(건오레가노)", c: "2" },
    ],

    // 정렬 정보
    headerSortMeta: {
      key: "",
      orderBy: "",
    },

    categoryStoresTableItems: [
      {
        id: 0,
        image:
          "https://cdn.pixabay.com/photo/2020/06/02/06/52/cat-5249722__480.jpg",
        count: "0/22(0%)",
        productName: "딸기베이스(리플잼)",
        checked: false,
      },
      {
        id: 1,
        image:
          "https://cdn.pixabay.com/photo/2020/06/02/06/52/cat-5249722__480.jpg",
        count: "11/22(50%)",
        productName: "흑임자파우더(복음자리,구.로즈버드)",
        checked: true,
      },
    ] as CategoryStoresTableItem[],
  }),
  getters: {},
  actions: {
    setDeliveryOrderChangeMode() {
      this.isDeliveryOrderChangeMode = !this.isDeliveryOrderChangeMode;
    },
    setCourceChangeMode() {
      this.isCourceChangeMode = !this.isCourceChangeMode;
    },
  },
});
