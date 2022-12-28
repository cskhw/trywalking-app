import instance from "@/api/instance";
import type {
  SigninRequest,
  SignupRequest,
  RefreshTokenRequest,
} from "@/api/schema/request";
import type { LoginResponse, SimpleResponse } from "@/api/schema/response";
import type { AxiosResponse } from "axios";
import { IHttpError } from "../error";

export default {
  valid: (
    body: RefreshTokenRequest,
    isLogging?: boolean
  ): Promise<AxiosResponse<LoginResponse>> =>
    instance.post("/auth/valid", body, isLogging),
  signup: (
    body: SignupRequest,
    isLogging?: boolean
  ): Promise<AxiosResponse<SimpleResponse>> =>
    instance.post("/auth/signup", body, isLogging),
  signin: (
    body?: SigninRequest,
    isLogging?: boolean
  ): Promise<AxiosResponse<LoginResponse>> =>
    instance.post("/auth/signin", body, isLogging),
  refresh: (
    body?: RefreshTokenRequest,
    isLogging?: boolean
  ): Promise<AxiosResponse<LoginResponse>> =>
    instance.post("/auth/refresh", body, isLogging),
};
