export interface Center {
  centerId: number;
  name: string;
  location: string;
  createdAt: string;
  updatedAt: string;
}

export interface Production {
  id: number;
  name: string;
  price: string;
  weight: string;
}

export interface Store {
  id: number;
  name: string;
  location: string;
  production: Production;
}

export interface Cource {
  id: number;
  centerId: string;
  courceId: string;
  store: Store;
  createdAt: string;
  updatedAt: string;
}

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

export interface CategoryDashboardTableItem {
  cource: string;
  storedTime: string;
  storedRate: string;
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
