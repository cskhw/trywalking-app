import type { StoresTableItem } from "./useHomeStore.d";

export default defineStore("home", {
  state: () => ({
    isDeliveryOrderChangeMode: false,
    isCourceChangeMode: false,
    dashboardTableItems: [
      { a: "42/38/80", b: "42/38/80", c: "42" },
      { a: "총 매장 수", b: "총 수량", c: "총 주문 금액" },
      { a: "999,999", b: "9,999,999", c: "999,999,999" },
    ],

    // 정렬 정보
    headerSortMeta: {
      key: "",
      orderBy: "",
    },

    storesTableItems: [
      {
        id: "A1",
        restaurantName: "오늘도 나는 오더해1",
        loadingPosition: "내",
        count: "2/3",
        status: "피킹중",
        camera: "아이콘",
        selected: false,
      },
      {
        id: "A2",
        restaurantName: "오늘도 나는 오더해2",
        loadingPosition: "외",
        count: "2/4",
        status: "배송중",
        camera: "아이콘",
        selected: false,
      },
      {
        id: "A3",
        restaurantName: "오늘도 나는 오더해3",
        loadingPosition: "외",
        count: "2/5",
        status: "배송완",
        camera: "아이콘",
        selected: false,
      },
      {
        id: "A4",
        restaurantName: "오늘도 나는 오더해4",
        loadingPosition: "외",
        count: "2/5",
        status: "배송완",
        camera: "아이콘",
        selected: false,
      },
      {
        id: "A5",
        restaurantName: "오늘도 나는 오더해5",
        loadingPosition: "외",
        count: "2/5",
        status: "배송완",
        camera: "아이콘",
        selected: false,
      },
      {
        id: "A6",
        restaurantName: "오늘도 나는 오더해6",
        loadingPosition: "외",
        count: "2/5",
        status: "배송완",
        camera: "아이콘",
        selected: false,
      },
      {
        id: "A7",
        restaurantName: "오늘도 나는 오더해7",
        loadingPosition: "외",
        count: "2/5",
        status: "배송완",
        camera: "아이콘",
        selected: false,
      },
      {
        id: "A8",
        restaurantName: "오늘도 나는 오더해8",
        loadingPosition: "외",
        count: "2/5",
        status: "배송완",
        camera: "아이콘",
        selected: false,
      },
      {
        id: "A9",
        restaurantName: "오늘도 나는 오더해9",
        loadingPosition: "외",
        count: "2/5",
        status: "배송완",
        camera: "아이콘",
        selected: false,
      },
      {
        id: "A10",
        restaurantName: "오늘도 나는 오더해10",
        loadingPosition: "외",
        count: "2/5",
        status: "배송완",
        camera: "아이콘",
        selected: false,
      },
      {
        id: "A11",
        restaurantName: "오늘도 나는 오더해11",
        loadingPosition: "외",
        count: "2/5",
        status: "배송완",
        camera: "아이콘",
        selected: false,
      },
      {
        id: "A12",
        restaurantName: "오늘도 나는 오더해12",
        loadingPosition: "외",
        count: "2/5",
        status: "배송완",
        camera: "아이콘",
        selected: false,
      },
    ] as StoresTableItem[],
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