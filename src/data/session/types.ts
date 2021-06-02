export interface SessionStates {
  auth: {
    access_token: string;
    expires: string;
    token_type: string;
    created_at: string;
    expires_in: string;
  };
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
