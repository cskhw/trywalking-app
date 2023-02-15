export interface StoresTableItem {
  id: string;
  restaurantName: string;
  loadingPosition: string;
  count: string;
  status: string;
  camera: string;
  selected?: boolean;
}

export interface CategoryStoresTableItem {
  id: number;
  image: string;
  productName: string;
  count: string;
  checked: boolean;
}

export interface SearchTableItems {
  pickingCount: number;
  pickingCompleteCount: number;
  pickingTotalCount: number;
  deliveringCount: number;
  deliveringCompleteCount: number;
  deliveringTotalCount: number;
  loadingPositionInsideCount: string;
  loadingPositionOutSideCount: string;
}
