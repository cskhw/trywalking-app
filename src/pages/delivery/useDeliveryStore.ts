import type { DashboardTableItem, StoresTableItem } from "./useDeliveryStore.d";

export default defineStore("delivery", {
  state: () => ({
    isDeliveryOrderChangeMode: false,
    isCourceChangeMode: false,
    dashboardTableItems: [
      {
        deliveryCount: "48/72",
        loadingPosition: "48/72",
        allStoresCount: "64",
        allProductionCount: "1024",
        totalProductionPrice: "99,999,999",
      },
    ] as DashboardTableItem[],

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

    detailData: {},
    inspectionData: {},
    uploadData: {},
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
