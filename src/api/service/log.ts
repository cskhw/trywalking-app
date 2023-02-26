import { logInstance } from "@/api/instance";
import type { CreateLogResponse } from "@/api/schema/response";
import type { AxiosResponse } from "axios";
import type { CreateLogRequest } from "@/api/schema/request";
import type { Log } from "@/models/log";
// import axios from "axios";

export default {
  readAllLog: (): Promise<AxiosResponse<Array<Log>>> => logInstance.get("/log"),
  createLog: async (
    body: CreateLogRequest
  ): Promise<AxiosResponse<CreateLogResponse>> => {
    // body.ip = (await axios.get("https://api.ipify.org?format=json")).data.ip;
    return logInstance.post("/log/create", body);
  },
};
