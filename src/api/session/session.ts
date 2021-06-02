import axios from 'axios';
import {
  LoginAPIParameters,
  LoginResponse,
  SignUpAPIParameters,
  SignUpResponse,
  UpdateUserNameParameter,
  UpdateFollowThemeParameter,
  UpdateUserNameResponse,
} from './session.types';

export function loginAPI({
  email = '',
  password = '',
}: LoginAPIParameters = {}) {
  return axios.post<LoginResponse>('login', {
    email: email,
    password: password,
  });
}

export function signUpApi({
  email = '',
  password = '',
}: SignUpAPIParameters = {}) {
  return axios.post<SignUpResponse>('register', {
    email: email,
    password: password,
  });
}

export function updateUserNameApi({
  userName = '',
  fullName = '',
}: UpdateUserNameParameter) {
  return axios.put<UpdateUserNameResponse>('user/info', {
    username: userName,
    fullname: fullName,
  });
}

export function updateFollowThemeApi({ themeKey }: UpdateFollowThemeParameter) {
  return axios.post<any>('user-theme', {
    theme_key: themeKey,
  });
}

const SessionAPI = {
  login: loginAPI,
  signUp: signUpApi,
  updateUserName: updateUserNameApi,
  updateFollowTheme: updateFollowThemeApi,
};

export default SessionAPI;
