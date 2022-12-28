import instance from "@/api/instance";
import useAppStore from "@/stores/useAppStore";
import { AxiosRequestConfig } from "axios";

// 인터셉터에서 인증토큰을 갱신해줌
export default (accessToken: string) => {
  // 헤더에 인증토큰 넣어줌
  instance.interceptors.request.use(
    function (config: AxiosRequestConfig) {
      sessionStorage.setItem(COOKIE_ACCESS_TOKEN, accessToken);

      config.headers = config.headers ? config.headers : {};
      config.headers.Authorization = "Bearer " + accessToken;
      return config;
    },
    function (error) {
      log(error);
      return Promise.reject(error);
    }
  );
};
