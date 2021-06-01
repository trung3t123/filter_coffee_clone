import axios from 'axios';
import {
  LoginAPIParameters,
  LoginResponse,
  SignUpAPIParameters,
  SignUpResponse,
  UpdateUserNameParameter,
  UpdateFollowThemeParameter,
} from './session.types';
// import { CLIENT_ID, CLIENT_SECRET } from './constants';

export function loginAPI({
  email = '',
  password = '',
}: LoginAPIParameters = {}) {
  return axios.post<LoginResponse>('login', {
    // grant_type: 'password',
    email: email,
    password: password,
    // client_id: CLIENT_ID,
    // client_secret: CLIENT_SECRET,
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
  return axios.put<any>('user/info', {
    username: userName,
    fullname: fullName,
  });
}

export function updateFollowThemeApi({ themeKey }: UpdateFollowThemeParameter) {
  return axios.post<any>('user/follow-theme', {
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
