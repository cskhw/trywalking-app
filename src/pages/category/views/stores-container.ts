import { sortObjectArray } from "@/@core/utils/appUtils";
import useHomeStore from "../useCategoryStore";

export const tableheaders = ref<DataTableHeader[]>([
  { title: "유통사", key: "distributorName", sortable: true },
  { title: "코스", key: "cource", sortable: true },
  { title: "완료율", key: "completeRate", sortable: true },
  { title: "입고", key: "receivingCheckTime", sortable: true },
  {
    title: "완료",
    key: "checked",
    sortable: true,
  },
]);

export function getColor(status: string) {
  if (status === "배송완") return "success";
  if (status === "배송중") return "orange";
  if (status === "피킹중") return "blue";
  if (status === "배송중") return "yellow";
}

const homeStore = useHomeStore();

const { categoryDistributorTableItems, headerSortMeta } =
  storeToRefs(homeStore);

/**테이블 정렬 */

export const orgTableItems = ref([...categoryDistributorTableItems.value]);

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
  let orderBy = "";

  // 정렬 키가 달라지면 정렬 초기화
  if (headerSortMeta.value.key !== key) {
    categoryDistributorTableItems.value = [...orgTableItems.value];
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

  console.log(JSON.stringify(headerSortMeta.value));

  // 테이블 정렬 처리
  if (orderBy === "") {
    categoryDistributorTableItems.value = [...orgTableItems.value];
  } else {
    sortObjectArray(categoryDistributorTableItems.value, key, type, orderBy);
  }
};
