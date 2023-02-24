import instance from "@/api/instance";
import type { GetCentersResponse } from "@/api/schema/response";
import type { AxiosResponse } from "axios";
import type { CategoryGetCourcesRequest } from "@/api/schema/request";
import type { CategoryGetCourcesResponse } from "@/api/schema/response";

export default {
  getCenters: (): Promise<AxiosResponse<GetCentersResponse>> =>
    instance.post("/category/centers"),
  getCources: (
    body: CategoryGetCourcesRequest
  ): Promise<AxiosResponse<CategoryGetCourcesResponse>> =>
    instance.post("/category/cources", body),
};
