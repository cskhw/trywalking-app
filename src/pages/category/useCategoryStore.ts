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

    storesTableItems: [
      {
        id: 0,
        completeRate: "0/22(0%)",
        distributorName: "이너피스",
        cource: "1",
        check: false,
      },
      {
        id: 1,
        completeRate: "11/22(50%)",
        distributorName: "CJ프레시",
        cource: "2",
        check: true,
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
