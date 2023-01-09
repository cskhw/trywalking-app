import { logInstance } from "@/api/instance";
import type { CreateLogResponse } from "@/api/schema/response";
import type { AxiosResponse } from "axios";
import type { CreateLogRequest } from "@/api/schema/request";
import type { Log } from "@/types/log";

export default {
  readAllLog: (): Promise<AxiosResponse<Array<Log>>> =>
    logInstance.get("/kafka/log"),
  createLog: (
    body: CreateLogRequest
  ): Promise<AxiosResponse<CreateLogResponse>> =>
    logInstance.post("/kafka/log/create", body),
};
