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

export const tableValue = ref([
  { name: "42/38/80", b: "42/38/80", status: "42" },
  { name: "총 매장 수", b: "총 수량", status: "총 주문 금액" },
  { name: "999,999", b: "9,999,999", status: "99,999,999,999" },
]);
