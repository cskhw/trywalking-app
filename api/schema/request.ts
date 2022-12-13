/** auth api 리스트
 * register: 회원가입
 * login: 이메일 로그인
 * refresh: 토큰 재발급
 */

export interface SignupRequest {
  username: string;
  password: string;
  role: string;
}

export interface LoginRequest {
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
