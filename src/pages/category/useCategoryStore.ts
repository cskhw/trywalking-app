import type { CategoryStoresTableItem } from "./useCategoryStore.d";

export default defineStore("home", {
  state: () => ({
    isDeliveryOrderChangeMode: false,
    isCourceChangeMode: false,
    dashboardTableItems: [
      { a: "왕십리A", b: "20:23~20:23", c: "100%" },
      { a: "왕십리B", b: "20:23~20:23", c: "100%" },
      { a: "왕십리C", b: "20:23~20:23", c: "100%" },
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
