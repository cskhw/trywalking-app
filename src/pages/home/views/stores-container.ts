import { DTableStyles } from "@/components/DTable";
import colors from "@/styles/colors";
import { CSSProperties } from "vue";

export const tableheaders = ref([
  "순서",
  "매장명",
  "적재",
  "수량",
  "금액",
  "피킹",
  "사진",
]);

export const pickingHTML = (status: string) =>
  `<div style='background-color: #FFC107; padding: 2px; border-radius: 8px; font'>${status}</div>`;

export const cameraIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" tag="i" class="v-icon notranslate v-theme--light text-gray iconify iconify--mdi" width="1em" height="1em" viewBox="0 0 24 24" data-v-c7279bfe="" style="font-size: 36px; height: 36px; width: 36px;"><path fill="gray" d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m8 3a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 2a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3Z"></path></svg>`;

export function setColumns(i: number, style: CSSProperties) {
  if (i === 0) {
    style.width = "9%";
  } else if (i === 1) {
    // 37
    style.width = "26%";
  } else if (i === 2) {
    // 44
    style.width = "7%";
  } else if (i === 3) {
    // 52
    style.width = "8%";
  } else if (i === 4) {
    // 78
    style.width = "26%";
  } else if (i === 5) {
    // 91
    style.width = "13%";
  } else if (i === 6) {
    // 102
    style.width = "11%";
    style.borderRight = "none";
  }
  return style;
}

export const storeTableStyle = computed<DTableStyles>(() => ({
  tableStyle: {
    width: "100%",
    outline: "none",
    textAlign: "center",
  } as CSSProperties,
  tHeaderStyle: { width: "100%" },
  thStyle: (i: number): CSSProperties | undefined => {
    const style: CSSProperties = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "40px",
      lineHeight: "16px",
      padding: "4px",
      backgroundColor: colors.ee,
      border: "none",
      borderRight: colors.borderE0,
      fontWeight: "bold",
      fontSize: "14px",
      whiteSpace: "normal",
      wordBreak: "break-all",
    };
    return setColumns(i, style);
  },
  columnStyle: (i: number): CSSProperties | undefined => {
    const style: CSSProperties = {
      borderRight: colors.borderE0,
    };
    return setColumns(i, style);
  },
  trStyle: (i: number) => {
    const style: CSSProperties = {
      height: "40px",
      border: "none",
      borderBottom: colors.borderEE,
    };
    return style;
  },
  tdStyle: () =>
    ({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "4px",
      lineHeight: "14px",
      fontSize: "14px",
      whiteSpace: "normal",
      wordBreak: "break-all",
      backgroundColor: "white",
    } as CSSProperties),
}));

export const tableValue = ref([
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
  {
    id: "A-1",
    store: "오늘도 나는 오더해",
    load: "내",
    count: "40",
    price: "9,999,999",
    picking: pickingHTML("배송중"),
    camera: cameraIcon,
  },
]);
