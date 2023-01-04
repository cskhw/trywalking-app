/** /kafka/log api 리스트
 * CreateLogRequest: 로그 생성
 * ReadLogRequest: 로그 가져오기
 * ReadAllLogRequest: 로그 모두 가져오기
 */

export interface CreateLogRequest {
  msg: string;
  path: string;
}

export interface ReadLogRequest {}
export interface ReadAllLogRequest {}

/** /auth api 리스트
 * SignupRequest: 회원가입
 * SigninRequest: 로그인
 * AccessTokenRequest: 토큰 재발급
 */

export interface SignupRequest {
  username: string;
  password: string;
  role: string[];
}

export interface SigninRequest {
  username: string;
  password: string;
}

export interface AccessTokenRequest {
  accessToken: string;
}

export interface RequestEmailRequest {
  email: string;
}

export interface VerifyEmailRequest {
  email: string;
  code: string;
}
