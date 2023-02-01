import type { DTableStyles } from "@/components/DTable";
import type { CSSProperties } from "vue";
import colors from "@/styles/colors";

export const tableStyle = computed<DTableStyles>(() => ({
  tableStyle: {
    width: "100%",
    outline: "none",
    textAlign: "center",
  } as CSSProperties,
  tHeaderStyle: { width: "100%", fontSize: "12px" },
  thStyle: (i: number): CSSProperties | undefined => {
    const style: CSSProperties = {
      height: "24px",
      padding: "4px 8px",
      backgroundColor: colors.ee,
      border: "none",
      borderRight: colors.borderE0,
    };

    if (i === 0) {
      style.width = "35%";
      return style;
    } else if (i === 1) {
      style.width = "35%";
      return style;
    } else if (i === 2) {
      style.width = "30%";
      style.borderRight = "none";
      return style;
    }
  },
  columnStyle: (i: number): CSSProperties | undefined => {
    const style: CSSProperties = {
      borderRight: colors.borderE0,
    };
    if (i === 0) {
      style.width = "35%";
      return style;
    } else if (i === 1) {
      style.width = "35%";
      return style;
    } else if (i === 2) {
      style.width = "30%";
      style.borderRight = "none";
      return style;
    }
  },
  trStyle: (i: number) => {
    const style: CSSProperties = {
      height: "24px",
      fontSize: "12px",
      border: "none",
    };
    if (i == 1) {
      style.backgroundColor = colors.ee;
    }
    if (i == 2) {
      style.borderBottom = colors.borderEE;
    }
    return style;
  },
  tdStyle: () => ({
    padding: "4px 8px",
    border: "none",
  }),
}));
