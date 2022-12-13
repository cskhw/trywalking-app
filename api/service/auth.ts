import instance from "@/api/instance";
import type {
  LoginRequest,
  SignupRequest,
  RequestEmailRequest,
  VerifyEmailRequest,
} from "@/api/schema/request";
import type { LoginResponse, SimpleResponse } from "@/api/schema/response";
import type { AxiosResponse } from "axios";

export default {
  signup: (params: SignupRequest): Promise<AxiosResponse<SimpleResponse>> =>
    instance.post("/auth/signup", params),
  requestEmailCode: (
    params: RequestEmailRequest
  ): Promise<AxiosResponse<SimpleResponse>> =>
    instance.post("/auth/request_email_code", params),
  verifyEmailCode: (
    params: VerifyEmailRequest
  ): Promise<AxiosResponse<SimpleResponse>> =>
    instance.post("/auth/verify_email_code", params),
  login: (params: LoginRequest): Promise<AxiosResponse<LoginResponse>> =>
    instance.post("/auth/signin", params),
};
