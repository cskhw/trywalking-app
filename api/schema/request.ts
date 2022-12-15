/** log api 리스트
 * LogCreateRequest: 로그 생성
 * LogReadRequest: 로그 가져오기
 * LogReadAllRequest: 로그 모두 가져오기
 */

export interface LogReadRequest {}

export interface LogReadAllRequest {}

export interface LogCreateRequest {
  msg: string;
  path: string;
}

/** auth api 리스트
 * signup: 회원가입
 * signin: 이메일 로그인
 * refresh: 토큰 재발급
 */

export interface SignupRequest {
  username: string;
  password: string;
  role: string;
}

export interface SigninRequest {
  username: string;
  password: string;
}

export interface LogoutRequest {}

export interface RequestEmailRequest {
  email: string;
}

export interface VerifyEmailRequest {
  email: string;
  code: string;
}
