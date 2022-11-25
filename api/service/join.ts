// import type { AxiosResponse } from "axios";

// import instance from "@/api/instance";
// import type {
//   AppleValidationToken,
//   GoogleValidationToken,
//   JoinFormType,
//   WithdrawalRequest,
// } from "@/api/schema/request";
// import type { SimpleResponse } from "@/api/schema/response";
// import { COOKIE_ACCESS_TOKEN } from "@/assets/javascripts/common";
// import { GlobalCookies } from "@/assets/javascripts/cookie";

// export default {
//   email: (
//     params: JoinFormType
//   ): Promise<AxiosResponse<SimpleResponse, object>> =>
//     instance.post("service/join/email", params),
//   google: (
//     params: JoinFormType
//   ): Promise<AxiosResponse<SimpleResponse, object>> =>
//     instance.post("service/join/google", params),
//   apple: (
//     params: JoinFormType
//   ): Promise<AxiosResponse<SimpleResponse, object>> =>
//     instance.post("service/join/apple", params),
//   googleValidationToken: (
//     params: GoogleValidationToken
//   ): Promise<AxiosResponse<SimpleResponse, object>> =>
//     instance.get("service/join/google/validate-token", {
//       params: params,
//     }),
//   appleValidationToken: (
//     params: AppleValidationToken
//   ): Promise<AxiosResponse<SimpleResponse, object>> =>
//     instance.get("service/join/apple/validate-token", {
//       params: params,
//     }),
//   withdrawal: (
//     body: WithdrawalRequest
//   ): Promise<AxiosResponse<SimpleResponse, object>> =>
//     instance.post("service/join/withdrawal", body, {
//       headers: {
//         Authorization: GlobalCookies.get(COOKIE_ACCESS_TOKEN),
//       },
//     }),
// };
