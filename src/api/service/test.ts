import instance from "@/api/instance";
import type { CreateLogResponse, UsersMeResponse } from "@/api/schema/response";
import type { AxiosResponse } from "axios";
import type { CreateLogRequest } from "@/api/schema/request";

export default {
  check: (): Promise<AxiosResponse<UsersMeResponse>> =>
    instance.get("/test/check"),
  uploadImg: (body: FormData): Promise<AxiosResponse<UsersMeResponse>> =>
    instance.post("/test/upload-image", body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  readAll: (): Promise<AxiosResponse<UsersMeResponse>> => instance.get("/log"),
  create: (body: CreateLogRequest): Promise<AxiosResponse<CreateLogResponse>> =>
    instance.post("/test/create", body),
};
