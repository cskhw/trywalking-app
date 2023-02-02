import type { DTableStyles } from "@/components/DTable";
import type { CSSProperties } from "vue";
import colors from "@/styles/colors";

export const dashboardTableStyle = computed<DTableStyles>(() => ({
  tableStyle: {
    width: "100%",
    outline: "none",
    textAlign: "center",
  } as CSSProperties,
  tHeaderStyle: { width: "100%", fontSize: "12px" },
  thStyle: (i: number): CSSProperties | undefined => {
    const style: CSSProperties = {
      height: "24px",
      padding: "4px",
      backgroundColor: colors.ee,
      border: "none",
      borderRight: colors.borderE0,
      fontWeight: "bold",
    };

    if (i === 0) {
      style.width = "35%";
    } else if (i === 1) {
      style.width = "35%";
    } else if (i === 2) {
      style.width = "30%";
      style.borderRight = "none";
    }
    return style;
  },
  columnStyle: (i: number): CSSProperties | undefined => {
    const style: CSSProperties = {
      borderRight: colors.borderE0,
    };
    if (i === 0) {
      style.width = "35%";
    } else if (i === 1) {
      style.width = "35%";
    } else if (i === 2) {
      style.width = "30%";
      style.borderRight = "none";
    }
    return style;
  },
  trStyle: (i: number) => {
    const style: CSSProperties = {
      height: "24px",
      border: "none",
    };
    if (i == 1) {
      style.backgroundColor = colors.ee;
      style.fontWeight = "bold";
    }
    if (i == 2) {
      style.borderBottom = colors.borderEE;
    }
    return style;
  },
  tdStyle: () => ({
    padding: "4px",
    border: "none",
    fontSize: "12px",
  }),
}));

function setColumns(i: number, style: CSSProperties) {
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
