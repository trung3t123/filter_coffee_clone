export type LoginAPIParameters = {
  email?: string;
  password?: string;
};

export type LoginResponse = {
  token: string;
  status: number;
};

export type SignUpAPIParameters = LoginAPIParameters;

export type SignUpResponse = {
  token: string;
  status: number;
};

export type updateInfoParameter = {
  username: string;
  fullName: string;
};
