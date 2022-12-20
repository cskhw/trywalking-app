import axios, {
  AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";

import { getBaseUrl } from "@/api/utils";
import { extractError } from "./error";
import api from "./api";

const baseURL = import.meta.env.VITE_BASE_URL + getBaseUrl();
console.log(import.meta.env.VITE_BASE_URL);
console.log(baseURL);

const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 20000,
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  function (config: AxiosRequestConfig) {
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
  function (error) {
    return Promise.reject(error);
  }
);

async function logging(msg: string) {
  const route = useRoute();
  await api.log.create({
    msg: msg,
    path: route.fullPath,
  });
}

async function authWrapper<
  F extends (...args: any[]) => Promise<AxiosResponse<any>>
>(fn: F, islogging?: boolean): Promise<AxiosResponse<any>> {
  let result: any;
  try {
    if (islogging) logging(fn.name);
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
    config?: AxiosRequestConfig | undefined,
    isLoggging?: boolean
  ): Promise<AxiosResponse<any>> {
    return authWrapper(() => axiosInstance.get(url, config), isLoggging);
  },

  getNaiveUrl: async function (
    url: string,
    config?: AxiosRequestConfig | undefined,
    isLoggging?: boolean
  ): Promise<AxiosResponse<any>> {
    config = config ? config : {};
    config.baseURL = "";
    return authWrapper(() => axiosInstance.get(url, config), isLoggging);
  },

  post: async function (
    url: string,
    data?: any,
    config?: AxiosRequestConfig | undefined,
    isLoggging?: boolean
  ): Promise<AxiosResponse<any>> {
    return authWrapper(() => axiosInstance.post(url, data, config), isLoggging);
  },

  put: async function (
    url: string,
    data?: any,
    config?: AxiosRequestConfig | undefined,
    isLoggging?: boolean
  ): Promise<AxiosResponse<any>> {
    return authWrapper(() => axiosInstance.put(url, data, config), isLoggging);
  },

  delete: async function (
    url: string,
    config?: AxiosRequestConfig | undefined,
    isLoggging?: boolean
  ): Promise<AxiosResponse<any>> {
    return authWrapper(() => axiosInstance.delete(url, config), isLoggging);
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
