import axios from 'axios';
import { LoginAPIParameters, LoginResponse } from './session.types';
import { CLIENT_ID, CLIENT_SECRET } from './constants';

export function loginAPI({
  email = '',
  password = '',
}: LoginAPIParameters = {}) {
  return axios.post<LoginResponse>('oauth/token', {
    grant_type: 'password',
    email: email,
    password: password,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  });
}

const SessionAPI = {
  login: loginAPI,
};

export default SessionAPI;
