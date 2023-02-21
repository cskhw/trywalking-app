import useDeliveryStore from "../useDeliveryStore";
import type { StoresTableItem } from "../useDeliveryStore.d";

// datepicker
export const date = ref(new Date());

// select values
export const centerSelectValue = ref("센터미배정");
export const centerSelectItems = ref(["업장 선택", "센터 미배정", "왕십리"]);

export const routeSelectValue = ref("노선 선택");
export const routeSelectItems = ref([]);

export const loadSelectValue = ref("착지 선택");
export const loadSelectItems = ref([]);

export const pickingSelectValue = ref("적재위치");
export const pickingSelectItems = ref([]);

export const deliveryOrderSelectValue = ref("상태");
export const deliveryOrderSelectItems = ref([]);

export const searchQuery = ref("test");

export const isShowOnlyCs = ref(false);
export const isShowOnlyPickingCompleted = ref(false);

export const tableheaders = ref([
  "배송 중/합",
  "적재 내/외",
  "매장 수",
  "수량",
  "금액",
]);

const deliveryStore = useDeliveryStore();

/**배송 순서 & 노선 변경 */
const {
  isDeliveryOrderChangeMode,
  isCourceChangeMode,
  storesTableItems,
  headerSortMeta,
} = storeToRefs(deliveryStore);

export const orgStoresTableItems = ref([...storesTableItems.value]);

export async function setStoresTableItemsByDelivery() {
  if (headerSortMeta.value.key) {
    alert("테이블 정렬을 풀어주세요");
    return;
  }

  if (isCourceChangeMode.value) {
    alert("노선 저장을 완료해주세요.");
    return;
  }

  if (!isDeliveryOrderChangeMode.value) {
    deliveryStore.setDeliveryOrderChangeMode();
    return;
  }

  // 변경된 값이 없으면 리턴
  if (
    JSON.stringify(storesTableItems.value) ===
    JSON.stringify(orgStoresTableItems.value)
  ) {
    deliveryStore.setDeliveryOrderChangeMode();
    return;
  }

  const isConfirm = confirm("정말 저장하시겠습니까?");

  if (!isConfirm) {
    deliveryStore.setDeliveryOrderChangeMode();
    storesTableItems.value = [...orgStoresTableItems.value];
    return;
  }

  //TODO: 배송 순서 보내는 api 필요

  orgStoresTableItems.value = [...storesTableItems.value];
  deliveryStore.setDeliveryOrderChangeMode();
}

export async function setStoresTableItemsByCourse() {
  if (headerSortMeta.value.key) {
    alert("테이블 정렬을 풀어주세요");
    return;
  }

  if (isDeliveryOrderChangeMode.value) {
    alert("배송 순서 변경을 완료해주세요.");
    return;
  }

  if (!isCourceChangeMode.value) {
    deliveryStore.setCourceChangeMode();
    return;
  }

  let isSelected = false;

  const storesItems: StoresTableItem[] = [];

  // selected 가 true 인 것만 거름
  storesTableItems.value.map((item) => {
    if (item.selected) {
      isSelected = true;
      delete item.selected;
      console.log(item);
      storesItems.push(item);
    }
  });

  // 선택된 값이 없으면 리턴
  if (!isSelected) {
    deliveryStore.setCourceChangeMode();
    storesTableItems.value.map((item) => {
      item.selected = false;
    });
    return;
  }

  const isConfirm = confirm("정말 저장하시겠습니까?");

  if (!isConfirm) {
    deliveryStore.setCourceChangeMode();
    storesTableItems.value.map((item) => {
      item.selected = false;
    });
    return;
  }

  //TODO: 노선 보내는 api 필요

  alert(JSON.stringify(storesItems));

  deliveryStore.setCourceChangeMode();
}
/**배송 순서 & 노선 변경 끝 */
