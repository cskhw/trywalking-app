import { sortObjectArray } from "@/@core/utils/appUtils";
import useHomeStore from "../useHomeStore";

export const tableheaders = ref<DataTableHeader[]>([
  {
    title: "순서",
    key: "id",
    sortable: true,
  },
  { title: "식당명", key: "restaurantName", sortable: true },
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

const homeStore = useHomeStore();

const {
  isDeliveryOrderChangeMode,
  isCourceChangeMode,
  storesTableItems,
  headerSortMeta,
} = storeToRefs(homeStore);

/**테이블 정렬 */

export const orgTableItems = ref([...storesTableItems.value]);

export const showSortBtnCondition = computed(
  () => (header: DataTableHeader) =>
    // sortable이 있고 메타 키와 헤더 키가 같으면
    header.sortable && headerSortMeta.value.key === header.key
);

// 헤더 정렬 버튼 색
export const headerSortColor = computed(
  () => (orderBy: string) =>
    headerSortMeta.value.orderBy == orderBy ? "black" : "grey"
);

export const sortStoresTableItems = (key: string, type: string) => {
  if (isDeliveryOrderChangeMode.value || isCourceChangeMode.value) {
    alert("배송 순서 변경 & 노선 저장을 완료해주세요.");
    return;
  }

  let orderBy = "";

  // 정렬 키가 달라지면 정렬 초기화
  if (headerSortMeta.value.key !== key) {
    storesTableItems.value = [...orgTableItems.value];
    headerSortMeta.value.orderBy = orderBy;
  }

  headerSortMeta.value.key = key;

  // 정렬 오더에 맞게 변수 초기화
  if (headerSortMeta.value.orderBy === "asc") {
    orderBy = "desc";
    headerSortMeta.value.orderBy = orderBy;
  } else if (headerSortMeta.value.orderBy === "desc") {
    orderBy = "";
    headerSortMeta.value.orderBy = orderBy;
    headerSortMeta.value.key = "";
  } else if (headerSortMeta.value.orderBy === "") {
    orderBy = "asc";
    headerSortMeta.value.orderBy = orderBy;
  }

  // 테이블 정렬 처리
  if (orderBy === "") {
    storesTableItems.value = [...orgTableItems.value];
  } else {
    sortObjectArray(storesTableItems.value, key, type, orderBy);
  }
};
