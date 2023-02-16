export interface StoresTableItem {
  id: string;
  restaurantName: string;
  loadingPosition: string;
  count: string;
  status: string;
  camera: string;
  selected?: boolean;
}

export interface CategoryDistributorTableItem {
  id: number;
  distributorName: string;
  cource: string;
  completeRate: string;
  receivingCheckTime: string;
  checked: boolean;
}

export interface CategoryStoreTableItem {
  id: number;
  image: string;
  name: string;
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
