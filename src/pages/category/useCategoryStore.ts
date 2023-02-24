import type {
  CategoryDashboardTableItem,
  CategoryDistributorTableItem,
  CategoryStoreTableItem,
  Center,
  Cource,
} from "./useCategoryStore.d";

export default defineStore("category", {
  state: () => ({
    isDeliveryOrderChangeMode: false,
    isCourceChangeMode: false,

    center: { name: "센터 미배정" } as Center,
    centers: [] as Center[],
    cources: [] as Cource[],

    dashboardTableItems: [
      { cource: "A-1", storedTime: "11:00~12:12", storedRate: "50%" },
      { cource: "A-2", storedTime: "11:00~12:12", storedRate: "50%" },
      { cource: "A-3", storedTime: "11:00~12:12", storedRate: "50%" },
    ] as CategoryDashboardTableItem[],

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
        count: "1",
        checked: false,
      },
      {
        id: 1,
        image:
          "https://cdn.pixabay.com/photo/2020/06/02/06/52/cat-5249722__480.jpg",
        count: "2s",
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

    async getCenters() {
      const res = await this.api.category.getCenters();
      if (res.status === 200) this.centers = res.data;

      console.log(res.data);
    },

    async getCources(centerName: string) {
      const res = await this.api.category.getCources({
        centerName: centerName,
      });
      if (res.status === 200) this.cources = res.data;
      console.log(res.data);
    },
  },
});
