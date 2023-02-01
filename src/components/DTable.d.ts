// STable
export interface DTableStyles {
  tableStyle?: CSSProperties;
  tHeaderStyle?: CSSProperties;
  tBodyStyle?: CSSProperties;
  thStyle?: (idx: number) => CSSProperties;
  trStyle?: (idx: number) => CSSProperties;
  columnStyle?: (idx: number) => CSSProperties;
  tdStyle?: (ridx: number, cidx: number) => CSSProperties;
}
