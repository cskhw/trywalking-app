import instance from "@/api/instance";
import type { GetCentersResponse } from "@/api/schema/response";
import type { AxiosResponse } from "axios";
import type { CreateLogRequest } from "@/api/schema/request";

export default {
  getCenters: (): Promise<AxiosResponse<GetCentersResponse>> =>
    instance.get("/category/centers"),
  uploadImg: (body: FormData): Promise<AxiosResponse<UsersMeResponse>> =>
    instance.post("/category/upload-image", body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  readAll: (): Promise<AxiosResponse<UsersMeResponse>> => instance.get("/log"),
  create: (body: CreateLogRequest): Promise<AxiosResponse<CreateLogResponse>> =>
    instance.post("/category/create", body),
};
