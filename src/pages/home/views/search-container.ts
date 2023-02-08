import useHomeStore from "../useHomeStore";
import type { StoresTableItem } from "../useHomeStore.d";

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

export const deliveryOrderSelectValue = ref("타입");
export const deliveryOrderSelectItems = ref([]);

export const searchQuery = ref("test");

export const isShowOnlyCs = ref(false);
export const isShowOnlyPickingCompleted = ref(false);

export const tableheaders = ref([
  "피킹 중/완/합계",
  "배송 중/완/합계",
  "적재 내/외",
]);

const homeStore = useHomeStore();

/**배송 순서 & 노선 변경 */
const { isDeliveryOrderChangeMode, isCourceChangeMode, storesTableItems } =
  storeToRefs(homeStore);

export const orgStoresTableItems = ref([...storesTableItems.value]);

export async function setStoresTableItemsByDelivery() {
  if (!isDeliveryOrderChangeMode.value) {
    homeStore.setDeliveryOrderChangeMode();
    return;
  }

  // 변경된 값이 없으면 리턴
  if (
    JSON.stringify(storesTableItems.value) ===
    JSON.stringify(orgStoresTableItems.value)
  ) {
    homeStore.setDeliveryOrderChangeMode();
    return;
  }

  const isConfirm = confirm("정말 저장하시겠습니까?");

  if (!isConfirm) {
    homeStore.setDeliveryOrderChangeMode();
    storesTableItems.value = [...orgStoresTableItems.value];
    return;
  }

  //TODO: 배송 순서 보내는 api 필요

  orgStoresTableItems.value = [...storesTableItems.value];
  homeStore.setDeliveryOrderChangeMode();
}

export async function setStoresTableItemsByCourse() {
  if (!isCourceChangeMode.value) {
    homeStore.setCourceChangeMode();
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
    homeStore.setCourceChangeMode();
    storesTableItems.value.map((item) => {
      item.selected = false;
    });
    return;
  }

  const isConfirm = confirm("정말 저장하시겠습니까?");

  if (!isConfirm) {
    homeStore.setCourceChangeMode();
    storesTableItems.value.map((item) => {
      item.selected = false;
    });
    return;
  }

  //TODO: 노선 보내는 api 필요

  alert(JSON.stringify(storesItems));

  homeStore.setCourceChangeMode();
}
/**배송 순서 & 노선 변경 끝 */
