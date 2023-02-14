export interface PickingItem {
  restaurantName: string;
  productCount: number;
  status: string;
}

export interface TotalPickingTableItem {
  id: string;
  distributor: string;
  productName: string;
  countAndWeight: string;
  detail: string;
  type: string;
  pickingList: PickingItem[];
}

export const tableHeaders = ref([
  {
    title: "순번",
    key: "id",
    sortable: false,
  },
  { title: "유통사", key: "distributor", sortable: false },
  { title: "품명", key: "productName", sortable: false },
  { title: "수/중량", key: "countAndWeight", sortable: false },
  { title: "상세", key: "detail", sortable: false },
  { title: "분류", key: "type", sortable: false },
]);

export function getTypeChipColor(status: string) {
  if (status === "냉동") return "blue";
  if (status === "냉장") return "orange";
}

export function getTagChipColor(status: string) {
  if (status === "완료") return "success";
  if (status === "미완료") return "red";
}

export const tableValue = ref<TotalPickingTableItem[]>([
  {
    id: "A-1",
    distributor: "CJ프레시웨이",
    productName: "아보카도",
    countAndWeight: "5/100g",
    detail: "21/25,PDTO,블럭,흰다리 새우살, 생칵테일새우",
    type: "냉동",
    pickingList: [
      {
        restaurantName: "어반비치연남",
        productCount: 10,
        status: "완료",
      },
      {
        restaurantName: "어반비치연남",
        productCount: 10,
        status: "미완료",
      },
      {
        restaurantName: "어반비치연남",
        productCount: 10,
        status: "완료",
      },
      {
        restaurantName: "어반비치연남",
        productCount: 10,
        status: "미완료",
      },
    ],
  },
  {
    id: "A-1",
    distributor: "CJ프레시웨이",
    productName: "아보카도",
    countAndWeight: "5/100g",
    detail: "21/25,PDTO,블럭,흰다리 새우살, 생칵테일새우",
    type: "냉동",
    pickingList: [
      {
        restaurantName: "어반비치연남",
        productCount: 10,
        status: "완료",
      },
      {
        restaurantName: "어반비치연남",
        productCount: 10,
        status: "미완료",
      },
      {
        restaurantName: "어반비치연남",
        productCount: 10,
        status: "완료",
      },
      {
        restaurantName: "어반비치연남",
        productCount: 10,
        status: "미완료",
      },
    ],
  },
]);
