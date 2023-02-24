import axios, {
  AxiosInstance,
  type AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";

import { getBaseUrl, getLogBaseURL } from "@/api/utils";
import { extractError } from "./error";
import api from "./api";

const baseURL = getBaseUrl();
const logBaseURL = getLogBaseURL();

console.log(logBaseURL);

const axiosConfig = { baseURL: baseURL, timeout: 20000 };
const logAxiosConfig = {
  baseURL: logBaseURL,
  timeout: 20000,
};

const axiosInstance: AxiosInstance = axios.create(axiosConfig);
export const logInstance: AxiosInstance = axios.create(logAxiosConfig);

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  async function (config: AxiosRequestConfig) {
    config.headers = config?.headers ? config.headers : {};

    // 토큰 세션에 저장
    const accessToken = sessionStorage.getItem(ACCESS_TOKEN);
    if (accessToken) config.headers.Authorization = "Bearer " + accessToken;

    return config;
  },
  function (error) {
    log(error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  function (response) {
    // @ts-ignore
    const bearerAt = response.headers.get(Authorization);
    log(bearerAt);

    // Authorization 토큰이 있으면 세션 갱신해줌
    if (bearerAt) {
      const at = bearerAt.slice(7);
      sessionStorage.setItem(ACCESS_TOKEN, at);
    }

    return response;
  },
  function (e) {
    const error = extractError(e);
    return Promise.reject(error);
  }
);

// 로깅 함수
async function logging(url: string) {
  await api.log.createLog({
    path: window.location.href,
    event: "routing",
    url: url,
    date: new Date().toUTCString(),
  });
}

// 요청 wrapper
async function requestWrapper<
  F extends (...args: any[]) => Promise<AxiosResponse<any>>
>(fn: F, url: string, isLogging?: boolean): Promise<AxiosResponse<any>> {
  let result: AxiosResponse<any>;
  try {
    // 로깅 함수 요청에 보내줌
    if (isLogging) logging(url);

    result = await fn();
  } catch (e: AxiosError & any) {
    log(e);
    return e;
  }
  return result;
}

const instance = {
  ...axiosInstance,

  get: async function (
    url: string,
    config?: AxiosRequestConfig | undefined,
    isLoggging = true
  ): Promise<AxiosResponse<any>> {
    return requestWrapper(
      () => axiosInstance.get(url, config),
      url,
      isLoggging
    );
  },

  getNaiveUrl: async function (
    url: string,
    config?: AxiosRequestConfig | undefined,
    isLoggging = true
  ): Promise<AxiosResponse<any>> {
    config = config ? config : {};
    config.baseURL = "";
    return requestWrapper(
      () => axiosInstance.get(url, config),
      url,
      isLoggging
    );
  },

  post: async function (
    url: string,
    data?: any,
    config?: AxiosRequestConfig | undefined,
    isLoggging = true
  ): Promise<AxiosResponse<any>> {
    return requestWrapper(
      () => axiosInstance.post(url, data, config),
      url,
      isLoggging
    );
  },

  put: async function (
    url: string,
    data?: any,
    config?: AxiosRequestConfig | undefined,
    isLoggging = true
  ): Promise<AxiosResponse<any>> {
    return requestWrapper(
      () => axiosInstance.put(url, data, config),
      url,
      isLoggging
    );
  },

  delete: async function (
    url: string,
    config?: AxiosRequestConfig | undefined,
    isLoggging = true
  ): Promise<AxiosResponse<any>> {
    return requestWrapper(
      () => axiosInstance.delete(url, config),
      url,
      isLoggging
    );
  },
};

// 파라미터 직렬화
// instance.defaults.paramsSerializer = function (paramObj) {
//   const params = new URLSearchParams();
//   for (const key in paramObj) {
//     if (Array.isArray(paramObj[key])) {
//       for (const value of paramObj[key]) {
//         params.append(key, value);
//       }
//     } else {
//       params.append(key, paramObj[key]);
//     }
//   }
//   return params.toString();
// };

export default instance;
