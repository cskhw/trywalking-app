import instance from "@/api/instance";
import type { LogCreateResponse, UsersMeResponse } from "@/api/schema/response";
import type { AxiosResponse } from "axios";
import { LogCreateRequest } from "@/api/schema/request";

export default {
  check: (): Promise<AxiosResponse<UsersMeResponse>> => instance.get("/log"),
  read: (id: number): Promise<AxiosResponse<UsersMeResponse>> =>
    instance.get(`/log/${id}`),
  readAll: (): Promise<AxiosResponse<UsersMeResponse>> => instance.get("/log"),
  create: (body: LogCreateRequest): Promise<AxiosResponse<LogCreateResponse>> =>
    instance.post("/log/create", body),
};
