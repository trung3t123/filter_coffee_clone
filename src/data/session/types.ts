export type UserInfoTypes = {
  id?: string;
  username?: string | null;
  fullname?: string | null;
  image_url?: string | null;
  email?: string;
  verified?: boolean;
  createdAt?: string;
};

export interface SessionStates {
  auth: {
    access_token: string;
    expires: string;
    token_type: string;
    created_at: string;
    expires_in: string;
  };
  user?: UserInfoTypes;
  status: string;
  register_status: string;
  login_status: string;
}

type SessionResult = {
  success: boolean;
  error?: string;
};

export type LoginResultType = SessionResult;

export type SignUpResultType = SessionResult;

export type UpdateUserNameResultType = SessionResult;
