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

export type LoginResultType = {
  success: boolean;
  error?: string;
};

export type SignUpResultType = LoginResultType;
