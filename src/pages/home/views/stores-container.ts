interface StoresTableItem {
  id: string;
  storeName: string;
  loadingPosition: string;
  count: string;
  status: string;
  camera: string;
}

export const tableheaders = ref([
  {
    title: "순서",
    key: "id",
    sortable: true,
  },
  { title: "매장", key: "storeName", sortable: true },
  { title: "적재", key: "loadingPosition", sortable: true },
  { title: "완/합계", key: "count", sortable: true },
  { title: "상태", key: "status", sortable: true },
  { title: "사진", key: "camera" },
]);

export function getColor(status: string) {
  if (status === "배송완") return "success";
  if (status === "배송중") return "orange";
  if (status === "피킹중") return "blue";
  if (status === "배송중") return "yellow";
}

export const tableItems = ref<StoresTableItem[]>([
  {
    id: "A-1",
    storeName: "오늘도 나는 오더해",
    loadingPosition: "내",
    count: "2/3",
    status: "피킹중",
    camera: "아이콘",
  },
  {
    id: "A-2",
    storeName: "오늘도 나는 오더해",
    loadingPosition: "외",
    count: "2/3",
    status: "배송중",
    camera: "아이콘",
  },
  {
    id: "A-3",
    storeName: "오늘도 나는 오더해",
    loadingPosition: "외",
    count: "2/3",
    status: "배송완",
    camera: "아이콘",
  },
]);
