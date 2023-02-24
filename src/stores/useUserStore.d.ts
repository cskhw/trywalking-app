export interface User {
  id: number;
  username: string;
  password: string;
  nickname: string;
  created_at: string;
  updated_at: string;
}

export interface Post {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}
