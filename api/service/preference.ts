import type { AxiosResponse } from "axios";

import instance from "@/api/instance";
import type {
  PreferenceDetailPresignedUrlRead,
  PreferenceAcceptanceConfigureRequest,
  PreferenceConfiqureDetailRequest as PreferenceDetailConfigureRequest,
  PreferenceConfiqureSettingRequest as PreferenceSettingConfigureRequest,
  PreferenceThemeColorPaletteReadRequest,
  PreferenceDetailPhoneNumberConfigureRequest,
} from "@/api/schema/request";
import type {
  PresignedURL,
  PostResponsePresignedURLs,
  PreferenceConfiqureDetailResponse as PreferenceDetailConfigureResponse,
  PreferenceConfiqureSettingResponse as PreferenceSettingConfigureResponse,
  PreferenceUserInfoReadResponse,
  PreferenceUserSettingsReadResponse,
  PreferenceThemeColorPaletteReadResponse,
  PreferenceAcceptanceConfigureDetailResponse,
  PreferenceDetailPhoneNumberConfigureResponse,
} from "@/api/schema/response";
import { COOKIE_ACCESS_TOKEN } from "@/assets/javascripts/common";
import { GlobalCookies } from "@/assets/javascripts/cookie";

export default {
  downloadFromPresignedUrl: (
    url: string
  ): Promise<AxiosResponse<any, object>> =>
    instance.getNaiveUrl(url, { responseType: "blob" }),

  preferenceUserInfoRead: (): Promise<
    AxiosResponse<PreferenceUserInfoReadResponse, object>
  > =>
    instance.get("service/preference/user-info/read", {
      headers: {
        Authorization: GlobalCookies.get(COOKIE_ACCESS_TOKEN),
      },
    }),

  preferenceUserSettingsRead: (): Promise<
    AxiosResponse<PreferenceUserSettingsReadResponse, object>
  > =>
    instance.get("service/preference/user-settings/read", {
      headers: {
        Authorization: GlobalCookies.get(COOKIE_ACCESS_TOKEN),
      },
    }),

  themeColorPaletteRead: (
    params: PreferenceThemeColorPaletteReadRequest
  ): Promise<AxiosResponse<PreferenceThemeColorPaletteReadResponse, object>> =>
    instance.get("service/preference/theme/color-palette/read", {
      params: params,
      headers: {
        Authorization: GlobalCookies.get(COOKIE_ACCESS_TOKEN),
      },
    }),

  settingConfigure: (
    body: PreferenceSettingConfigureRequest
  ): Promise<AxiosResponse<PreferenceSettingConfigureResponse, object>> =>
    instance.put("service/preference/setting/configure", body, {
      headers: {
        Authorization: GlobalCookies.get(COOKIE_ACCESS_TOKEN),
      },
    }),

  detailConfigure: (
    body: PreferenceDetailConfigureRequest
  ): Promise<AxiosResponse<PreferenceDetailConfigureResponse, object>> =>
    instance.put("service/preference/detail/configure", body, {
      headers: {
        Authorization: GlobalCookies.get(COOKIE_ACCESS_TOKEN),
      },
    }),

  acceptanceDetail: (
    body: PreferenceAcceptanceConfigureRequest
  ): Promise<
    AxiosResponse<PreferenceAcceptanceConfigureDetailResponse, object>
  > =>
    instance.put("service/preference/acceptance/configure", body, {
      headers: {
        Authorization: GlobalCookies.get(COOKIE_ACCESS_TOKEN),
      },
    }),

  publishPresignedUrlOfDetailImage: (): Promise<
    AxiosResponse<PostResponsePresignedURLs, object>
  > =>
    instance.get("service/preference/detail/image/presigned-url/publish/all", {
      headers: {
        Authorization: GlobalCookies.get(COOKIE_ACCESS_TOKEN),
      },
    }),

  readPresignedUrlOfDetailImage: (
    params: PreferenceDetailPresignedUrlRead
  ): Promise<AxiosResponse<PresignedURL, object>> =>
    instance.get("service/preference/detail/image/presigned-url/read", {
      params: params,
      headers: {
        Authorization: GlobalCookies.get(COOKIE_ACCESS_TOKEN),
      },
    }),

  detailPhoneNumberConfigure: (
    body: PreferenceDetailPhoneNumberConfigureRequest
  ): Promise<
    AxiosResponse<PreferenceDetailPhoneNumberConfigureResponse, object>
  > =>
    instance.put("service/preference/detail/phone-number/configure", body, {
      headers: {
        Authorization: GlobalCookies.get(COOKIE_ACCESS_TOKEN),
      },
    }),
};
