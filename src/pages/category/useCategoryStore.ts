import type {
  CategoryDistributorTableItem,
  CategoryStoreTableItem,
} from "./useCategoryStore.d";

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
    categoryDistributorTableItems: [
      {
        id: 0,
        distributorName: "1엘홀딩스",
        cource: "A, B, 1",
        completeRate: "0/14(0%)",
        receivingCheckTime: "11:11~12:12",
        checked: false,
      },
      {
        id: 1,
        distributorName: "2엘홀딩스",
        cource: "A, B, 1",
        completeRate: "11/22(50%)",
        receivingCheckTime: "11:11~12:12",
        checked: true,
      },
      {
        id: 2,
        distributorName: "3엘홀딩스",
        cource: "A, B, 1",
        completeRate: "0/14(0%)",
        receivingCheckTime: "~",
        checked: false,
      },
    ] as CategoryDistributorTableItem[],

    categoryStoreTableItems: [
      {
        id: 0,
        image:
          "https://cdn.pixabay.com/photo/2020/06/02/06/52/cat-5249722__480.jpg",
        name: "딸기베이스(리플잼)",
        count: "2",
        checked: false,
      },
      {
        id: 1,
        image:
          "https://cdn.pixabay.com/photo/2020/06/02/06/52/cat-5249722__480.jpg",
        count: "3",
        name: "흑임자파우더(복음자리,구.로즈버드)",
        checked: true,
      },
      {
        id: 1,
        image:
          "https://cdn.pixabay.com/photo/2020/06/02/06/52/cat-5249722__480.jpg",
        count: "3",
        name: "흑임자파우더(복음자리,구.로즈버드)",
        checked: true,
      },
    ] as CategoryStoreTableItem[],
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
