// HTTP 타임아웃
export const HTTP_REQUEST_TIMEOUT = import.meta.env.VITE_HTTP_REQUEST_TIMEOUT;

// 인증
export const COOKIE_ACCESS_TOKEN = "DL-AT";
export const COOKIE_REFRESH_TOKEN = "DL_RT";
export const TOKEN_EXPIRED_DATE_KEY_NAME = "DL_ET";
export const COOKIE_AUTO_LOGIN = "DL_AL";

// 1단위당 바이트
export const ONE_KB = 1024;
export const ONE_MB = ONE_KB * 1024;
export const ONE_GB = ONE_MB * 1024;

// 파일 사이즈 설정
export const SINGLE_DRAWING_SIZE_LIMIT = ONE_MB * 5; // 5MB
export const ALL_DRAWINGS_SIZE_LIMIT = ONE_MB * 20; // 20MB

// 날짜 포멧
export const dateFormat = "yyyy-MM-dd HH:mm:ss.SSS";

// 헤더
export const Authorization = "Authorization";

/**URL */
// category
export const categoryURL = "/category";
export const categoryDetailURL = "/category/detail";

// delivery
export const deliveryURL = "/delivery";
export const driverURL = "/delivery/driver";
export const uploadURL = "/delivery/upload";
export const totalPickingURL = "/delivery/total-picking";
export const deliveryDetailURL = "/delivery/detail";
export const deliveryInspectionURL = "/delivery/inspection";
export const deliveryUploadURL = "/delivery/upload";

export const settingsURL = "/settings";
export const dasURL = "/das";
