import axios from 'axios';
import {
  LoginAPIParameters,
  LoginResponse,
  SignUpAPIParameters,
  SignUpResponse,
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
    // grant_type: 'password',
    email: email,
    password: password,
    // client_id: CLIENT_ID,
    // client_secret: CLIENT_SECRET,
  });
}

const SessionAPI = {
  login: loginAPI,
  signUp: signUpApi,
};

export default SessionAPI;
