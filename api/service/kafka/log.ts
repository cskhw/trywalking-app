import instance, { logInstance } from "@/api/instance";
import type { LogCreateResponse, UsersMeResponse } from "@/api/schema/response";
import type { AxiosResponse } from "axios";
import type { CreateLogRequest } from "@/api/schema/request";

export default {
  readAllLog: (): Promise<AxiosResponse<UsersMeResponse>> =>
    logInstance.get("/kafka/log"),
  createLog: (
    body: CreateLogRequest
  ): Promise<AxiosResponse<LogCreateResponse>> =>
    logInstance.post("/kafka/log/create", body),
};
