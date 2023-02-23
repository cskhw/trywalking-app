import instance from "@/api/instance";
import type {
  SigninRequest,
  SignupRequest,
  AccessTokenRequest,
} from "@/api/schema/request";
import type { LoginResponse, SimpleResponse } from "@/api/schema/response";
import type { AxiosResponse } from "axios";

export default {
  check: (isLogging?: boolean): Promise<AxiosResponse<LoginResponse>> =>
    instance.get("/auth/check", {}, isLogging),
  valid: (
    body: AccessTokenRequest,
    isLogging?: boolean
  ): Promise<AxiosResponse<LoginResponse>> =>
    instance.post("/auth/valid", body, {}, isLogging),
  signup: (
    body: SignupRequest,
    isLogging?: boolean
  ): Promise<AxiosResponse<SimpleResponse>> =>
    instance.post("/auth/signup", body, {}, isLogging),
  signin: (
    body?: SigninRequest,
    isLogging?: boolean
  ): Promise<AxiosResponse<LoginResponse>> =>
    instance.post("/auth/signin", body, {}, isLogging),
  refresh: (
    body?: AccessTokenRequest,
    isLogging?: boolean
  ): Promise<AxiosResponse<LoginResponse>> =>
    instance.post("/auth/refresh", body, {}, isLogging),
};
