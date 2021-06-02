import { UserInfoTypes } from 'data/session/types';

export type LoginAPIParameters = {
  email?: string;
  password?: string;
};

export type LoginResponse = {
  token: string;
  user: UserInfoTypes;
  status: number;
};

export type SignUpAPIParameters = LoginAPIParameters;

export type SignUpResponse = {
  token: string;
  user: UserInfoTypes;
  status: number;
};

export type UpdateUserNameParameter = {
  userName: string;
  fullName: string;
};

export type UpdateFollowThemeParameter = {
  themeKey: string[];
};

export type UpdateUserNameResponse = {
  data: {
    user: UserInfoTypes;
  };
};
