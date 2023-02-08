export {};

// Vue 확장
declare module "vue/types/vue" {
  interface Vue {}
}

declare global {
  declare type DataTableHeader = {
    key: string;
    value?: SelectItemKey;
    title: string;
    colspan?: number;
    rowspan?: number;
    fixed?: boolean;
    align?: "start" | "end";
    width?: number;
    minWidth?: string;
    maxWidth?: string;
    sortable?: boolean;
    sort?: DataTableCompareFunction;
  };
}

declare module "@vue/runtime-core" {
  export interface GlobalComponents {}
}

// Extend Window Object
interface Window {}
// Extend Document Object
interface Document {}

// Global constants
// declare const google;
// declare const AppleID;
