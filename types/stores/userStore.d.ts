export interface IUser {
  id: number;
  username: string;
  password: string;
  created_at: string;
  updated_at: string;
}

export interface IPost {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}
