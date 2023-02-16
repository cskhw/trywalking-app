import { sortObjectArray } from "@/@core/utils/appUtils";
import router from "@/router";
import useModalStore from "@/stores/useModalStore";
import useDeliveryStore from "../useDeliveryStore";
import type { StoresTableItem } from "../useDeliveryStore.d";

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

const modalStore = useModalStore();
const deliveryStore = useDeliveryStore();

export const { globalModal } = storeToRefs(modalStore);

export const rowSelectedStyle = computed(() => (element: StoresTableItem) => ({
  backgroundColor: element.selected ? "#0080ff11" : "white",
}));

const {
  isDeliveryOrderChangeMode,
  isCourceChangeMode,
  storesTableItems,
  headerSortMeta,
} = storeToRefs(deliveryStore);

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

export const onClickUploadBtn = () => router.push(uploadURL);
export const onClickHeaderSortBtn = sortStoresTableItems;

// 상세 이동 모달
export const DeliveryDetailBtn = h(
  "div",
  {
    class: "pt-2 pb-2",
    onClick: () => {
      router.push("/delivery/detail");
      globalModal.value.hide();
    },
  },
  ["배송 상세"]
);
export const InspectionBtn = h("div", { class: "pt-2" }, ["검수확인서"]);
export const Divider = h("hr", {
  style: "width: 100%",
  class: "v-divider v-theme--light",
  "aria-orientation": "horizontal",
  role: "separator",
});

export const DetailConformModal = h(
  "div",
  { class: "d-center flex-column font-weight-bold" },
  [DeliveryDetailBtn, Divider, InspectionBtn]
);

export const onClickStoresTableRow = (element: StoresTableItem) => {
  globalModal.value.show();

  modalStore.globalModal.contents = DetailConformModal;
};

export const itemsPerPage = ref(50);
