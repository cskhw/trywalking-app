import type { IUser } from "@/types/user";

export interface SimpleResponse {
  status: boolean;
  detail: string;
}

export interface ValidationError {
  detail: [
    {
      loc: string[];
      msg: string;
      type: string;
    }
  ];
}

/** log response 리스트
 * LogCreateResponse
 */

export interface LogCreateResponse {
  id: number;
  msg: string;
  path: string;
  createdAt: string;
  updatedAt: string;
}

/** auth response 리스트
 * RegisterResponse: 회원가입
 * LoginResponse: 로그인
 */

export interface LoginResponse {
  id: number;
  accessToken: string;
  refreshToken: string;
  username: string;
  roles: string;
}

export interface AuthTokenResponse {
  access_token: string;
  refresh_token: string;
  expiration_time: string;
}

/** users response 리스트
 * UsersMeResponse: 유저 정보 가져옴
 */

export type UsersMeResponse = IUser;

/** management response 리스트
 * DatetimeUTCNowResponse: 서버의 UTC+00 현재 시간
 * NodeReadChildrenResponse: 코드 노드 자식 읽기
 * TermsVersionReadAllResponse: 모든 개인정보이용약관 버전 요청
 * TermsReadResponse: 특정 개인정보이용약관 요청
 * PrivacyVersionReadAllResponse: 모든 개인정보이용약관 버전 요청
 * PrivacyReadResponse: 특정 개인정보이용약관 요청
 * NodeCombinationReadAllResponse: 특정 코드 콤비네이션 값 결과
 * PreloadResponse: userStore, i18nStore, themeStore 한번에 초기화
 * SupportContentsTitleMapRequest
 */

export interface DatetimeUTCNowResponse {
  object: {
    utc_now: string;
  };
}

export interface NodeReadChildrenResponse {
  objects: {
    path: string;
    is_default: boolean;
  }[];
}

export interface NoticeReadPageResponse {
  page_size: number;
  page_number: number;
  total_size: number;
  objects: {
    id: number;
    format_code: {
      path: string;
      code_value: string;
      code_desc: string;
    };
    notice_title: string;
    notice_start_time: string;
    read_marks: [
      {
        read_time: string;
      }
    ];
  }[];
}

export interface NoticeReadResponse {
  object: NoticeDetail;
}
export interface NoticeCountsNotReadResponse {
  object: {
    total: number;
  };
}

export interface TermsVersionReadAllResponse {
  objects: {
    id: number;
    terms_version: string;
  }[];
}

export interface TermsReadResponse {
  object: {
    id: number;
    ui_lang_code_path: string;
    terms_version: string;
    terms_contents: string;
    differences: string;
    regist_time: string;
    update_time: string;
  };
}

export interface PrivacyVersionReadAllResponse {
  objects: {
    id: number;
    privacy_version: string;
  }[];
}

export interface PrivacyReadResponse {
  object: {
    id: number;
    ui_lang_code_path: string;
    privacy_version: string;
    privacy_contents: string;
    differences: string;
    regist_time: string;
    update_time: string;
  };
}

export interface ManagementI18nReadResponse {
  object: {
    contents: {
      [key: string]: {
        [key: string]: string;
      };
    };
    setting_titles: {
      [key: string]: {
        [key: string]: string;
      };
    };
    setting_descs: {
      [key: string]: {
        [key: string]: string;
      };
    };
  };
}

export interface NodeCombinationReadAllResponse {
  objects: {
    combination_type: string;
    combination_data: string;
    combination_data_desc: string;
    is_default: boolean;
  }[];
}

export interface PreloadResponse {
  object: {
    user_info: {
      client_type_code_path: string;
      user_email: string;
      detail: {
        theme_code_path: string;
        ui_lang_code_path: string;
        name: string;
        country_code: string;
        phone_num: string;
        timezone: string;
        join_type: string;
      };
      statuses: {
        service_code_path: string;
        format_code_path: string;
        is_paid_now: boolean;
        have_paid_history: boolean;
        expiration_time: string;
      }[];
      acceptance: {
        sms_news_acceptance: boolean;
        sms_system_acceptance: boolean;
        sms_education_acceptance: boolean;
        email_news_acceptance: boolean;
        email_system_acceptance: boolean;
        email_education_acceptance: boolean;
      };
    };
    user_settings: {
      [key: string]: string;
    };
    palettes: {
      [key: string]: {
        [key: string]: string;
      };
    };
    i18n: {
      contents: {
        [key: string]: {
          [key: string]: string;
        };
      };
      setting_titles: {
        [key: string]: {
          [key: string]: string;
        };
      };
      setting_descs: {
        [key: string]: {
          [key: string]: string;
        };
      };
    };
    utc_now: string;
  };
}

export interface SupportContentsTitleMapResponse {
  objects: SupportCardItem[];
}
export interface SupportContents3rdDepthReadResponse {
  object: {
    section_order: string;
    support_title: string;
    support_contents: string;
    update_time: string;
    related_tags: [
      {
        related_source_id: number;
        related_source_title: string;
      }
    ];
  };
}

export interface SupportContentsSearchPageResponse {
  page_number: number;
  page_size: number;
  total_size: number;
  objects: SupportContentsItem[];
}

/** preference api 리스트
 * PreferenceUserInfoReadResponse: 사용자 데이터 요청
 * PreferenceUserSettingsReadResponse: 사용자 설정 데이터 요청
 * PreferenceThemeColorPaletteReadResponse: 테마 색상 데이터
 * PreferenceConfiqureDetailResponse: 사용자 설정 저장 (detail 테이블용)
 * PreferenceConfiqureSettingResponse: 사용자 설정 저장 (setting 테이블용)
 * PreferenceAcceptanceConfigureDetailResponse: 사용자 설정 저장 (수신동의)
 */
export interface PreferenceUserInfoReadResponse {
  object: {
    user_info: {
      client_type_code_path: string;
      user_email: string;
      detail: {
        theme_code_path: string;
        ui_lang_code_path: string;
        name: string;
        country_code: string;
        phone_num: string;
        timezone: string;
        join_type: string;
      };
      statuses: {
        service_code_path: string;
        format_code_path: string;
        is_paid_now: boolean;
        have_paid_history: boolean;
        expiration_time: string;
      }[];
      acceptance: {
        sms_news_acceptance: boolean;
        sms_system_acceptance: boolean;
        sms_education_acceptance: boolean;
        email_news_acceptance: boolean;
        email_system_acceptance: boolean;
        email_education_acceptance: boolean;
      };
    };
    utc_now: string;
  };
}

export interface PreferenceUserSettingsReadResponse {
  object: {
    setting_code_path: string;
    setting_data: string;
  };
}

export interface PreferenceThemeColorPaletteReadResponse {
  object: {
    palette: {
      [key: string]: string;
    };
  };
}

export interface PreferenceAcceptanceConfigureDetailResponse {
  object: {
    sms_news_acceptance: boolean;
    sms_system_acceptance: boolean;
    sms_education_acceptance: boolean;
    email_news_acceptance: boolean;
    email_system_acceptance: boolean;
    email_education_acceptance: boolean;
  };
}

export interface PreferenceAcceptanceConfigureDetailResponse {
  object: {
    sms_news_acceptance: boolean;
    sms_system_acceptance: boolean;
    sms_education_acceptance: boolean;
    email_news_acceptance: boolean;
    email_system_acceptance: boolean;
    email_education_acceptance: boolean;
  };
}

export interface PreferenceConfiqureDetailResponse {
  object: {
    theme_code_path: string;
    ui_lang_code_path: string;
    name: string;
    country_code: string;
    timezone: string;
  };
}

export interface PreferenceConfiqureSettingResponse {
  object: {
    setting_code_path: string;
    setting_data: string;
  };
}

export interface PreferenceDetailPhoneNumberConfigureResponse {
  object: {
    phone_num: string;
  };
}
