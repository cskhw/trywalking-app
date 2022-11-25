import type { AxiosResponse } from "axios";

import instance from "@/api/instance";
import type { NlpSearchBm25Request } from "@/api/schema/request";
import type { NlpSearchBm25Response } from "@/api/schema/response";
import { COOKIE_ACCESS_TOKEN } from "@/assets/javascripts/common";
import { GlobalCookies } from "@/assets/javascripts/cookie";

export default {
  nlpSearchBm25: (
    body: string,
    params: NlpSearchBm25Request
  ): Promise<AxiosResponse<NlpSearchBm25Response, object>> =>
    instance.post("service/nlp/search/bm25", body, {
      params: params,
      headers: {
        Authorization: GlobalCookies.get(COOKIE_ACCESS_TOKEN),
      },
    }),
};
