import axios, {
  AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";

import { getBaseUrl } from "@/api/utils";
import { extractError } from "./error";
import api from "./api";

const baseURL = import.meta.env.VITE_BASE_URL + getBaseUrl();

const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 20000,
});

export const logInstance: AxiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 20000,
});

// 로깅 함수
async function logging(data: any) {
  const route = useRoute();
  console.log("fullpath: ", route.fullPath);

  const params = {
    msg: data ? data : "Msg is empty.",
    path: route.fullPath,
  };

  console.log("params: ", params);

  await api.log.create(params);
}

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  async function (config: AxiosRequestConfig) {
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (e) {
    const error = extractError(e);
    return Promise.reject(error);
  }
);

// 요청 wrapper
async function reqWrapper<
  F extends (...args: any[]) => Promise<AxiosResponse<any>>
>(fn: F, isLogging?: boolean): Promise<AxiosResponse<any>> {
  let result: any;
  try {
    // 로깅 함수 요청에 보내줌
    if (isLogging) logging(fn.name);

    result = await fn();
  } catch (e) {
    const error = extractError(e);
    console.log(error);
  } finally {
    return result;
  }
}

const instance = {
  ...axiosInstance,

  get: async function (
    url: string,
    isLoggging?: boolean,
    config?: AxiosRequestConfig | undefined
  ): Promise<AxiosResponse<any>> {
    return reqWrapper(() => axiosInstance.get(url, config), isLoggging);
  },

  getNaiveUrl: async function (
    url: string,
    isLoggging?: boolean,
    config?: AxiosRequestConfig | undefined
  ): Promise<AxiosResponse<any>> {
    config = config ? config : {};
    config.baseURL = "";
    return reqWrapper(() => axiosInstance.get(url, config), isLoggging);
  },

  post: async function (
    url: string,
    data?: any,
    isLoggging?: boolean,
    config?: AxiosRequestConfig | undefined
  ): Promise<AxiosResponse<any>> {
    return reqWrapper(() => axiosInstance.post(url, data, config), isLoggging);
  },

  put: async function (
    url: string,
    data?: any,
    isLoggging?: boolean,
    config?: AxiosRequestConfig | undefined
  ): Promise<AxiosResponse<any>> {
    return reqWrapper(() => axiosInstance.put(url, data, config), isLoggging);
  },

  delete: async function (
    url: string,
    isLoggging?: boolean,
    config?: AxiosRequestConfig | undefined
  ): Promise<AxiosResponse<any>> {
    return reqWrapper(() => axiosInstance.delete(url, config), isLoggging);
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
// };ㄴ

export default instance;
