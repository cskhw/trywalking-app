import instance from "@/api/instance";
import type { UserMeResponse } from "@/api/schema/response";
import type { AxiosResponse } from "axios";

export default {
  me: (): Promise<AxiosResponse<UserMeResponse>> => instance.post("/user/me"),
};
