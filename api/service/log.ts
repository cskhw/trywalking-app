import instance, { logInstance } from "@/api/instance";
import type { LogCreateResponse, UsersMeResponse } from "@/api/schema/response";
import type { AxiosResponse } from "axios";
import { CreateLogRequest } from "@/api/schema/request";

export default {
  check: (): Promise<AxiosResponse<UsersMeResponse>> =>
    logInstance.get("/log/check"),
  read: (id: number): Promise<AxiosResponse<UsersMeResponse>> =>
    logInstance.get(`/log/${id}`),
  readAll: (): Promise<AxiosResponse<UsersMeResponse>> =>
    logInstance.get("/log"),
  create: (body: CreateLogRequest): Promise<AxiosResponse<LogCreateResponse>> =>
    logInstance.post("/log/create", body),
};
