import instance from "@/api/instance";
import type {
  SigninRequest,
  SignupRequest,
  RequestEmailRequest,
  VerifyEmailRequest,
} from "@/api/schema/request";
import type { LoginResponse, SimpleResponse } from "@/api/schema/response";
import type { AxiosResponse } from "axios";

export default {
  check: (): Promise<AxiosResponse<SimpleResponse>> => instance.get("/auth"),
  signup: (body: SignupRequest): Promise<AxiosResponse<SimpleResponse>> =>
    instance.post("/auth/signup", body),
  signin: (params?: SigninRequest): Promise<AxiosResponse<LoginResponse>> =>
    instance.post("/auth/signin", params),
  refresh: (params?: SigninRequest): Promise<AxiosResponse<LoginResponse>> =>
    instance.post("/auth/refresh", params),
};
