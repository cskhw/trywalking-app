import { Center } from "@/pages/category/useCategoryStore";

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

export interface CreateLogResponse {
  path: string;
  ip: string;
  url?: string;
  event: string;
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

export interface UserMeResponse {
  id: number;
  username: string;
  password: string;
  nickname: string;
  created_at: string;
  updated_at: string;
}

/** /category api 리스트
 * GetCentersResponse: 이미지 업로드
 *
 */

export type GetCentersResponse = Center[];
