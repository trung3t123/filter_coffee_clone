import { createSelector } from 'reselect';

import { SessionStates } from './types';
import { RootStates } from '../types';
import { SESSION_STATUS } from 'constants/session';
import { ACTION_STATES } from 'data/config';

const getSession = (state: RootStates): SessionStates => state.session ?? {};
const getToken = (state: RootStates) => getSession(state).auth.access_token;
const getSessionStatus = (state: RootStates) => getSession(state).status;
const getLoginStatus = (state: RootStates) => getSession(state).login_status;
const getRegisterStatus = (state: RootStates) =>
  getSession(state).register_status;

const isOnLoginProcessSelector = createSelector(
  getLoginStatus,
  loginStatus => loginStatus === ACTION_STATES.LOADING,
);

const isLoggedInSelector = createSelector(getSessionStatus, sessionStatus => {
  return sessionStatus === SESSION_STATUS.AUTHORIZED;
});

const isOnRegisterProcessSelector = createSelector(
  getRegisterStatus,
  registerStatus => registerStatus === ACTION_STATES.LOADING,
);

const SessionSelector = {
  getSessionStatus,
  getToken,
  isLoggedInSelector,
  getLoginStatus,
  getRegisterStatus,
  isOnLoginProcessSelector,
  isOnRegisterProcessSelector,
};

export default SessionSelector;
