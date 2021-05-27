import SetupAPI from 'api/config';
import { AsyncAction } from 'data/types';
import { SESSION_STATUS } from 'constants/session';
import ActionErrorHandler from 'utils/error-handler/action';

import SessionAPI from 'api/session';
import { LoginAPIParameters } from 'api/session.types';

import * as types from './action_types';
import SessionSelector from './selectors';
import { LoginResultType } from './types';

export const setSessionStatus = (status: string) => ({
  type: types.SET_SESSION_STATUS,
  payload: { status },
});

export const updateToken = (token: string = '') => ({
  type: types.UPDATE_TOKEN,
  payload: { access_token: token },
});

export const clearSession = () => ({
  type: types.CLEAR,
});

export const authorize = (newAccessToken: string): AsyncAction => async (
  dispatch,
  getState,
) => {
  try {
    dispatch(setSessionStatus(SESSION_STATUS.AUTHORIZING));
    let token;

    if (newAccessToken) {
      token = newAccessToken;
      dispatch(updateToken(token));
    } else {
      token = SessionSelector.getToken(getState());
    }

    if (token) {
      SetupAPI.setHeaderToken(token, 'redux:action:authorize');
      dispatch(setSessionStatus(SESSION_STATUS.AUTHORIZED));
    } else {
      /**
       * if invalid session.
       * -> clear session & navigate to login stack
       */
      dispatch(setSessionStatus(SESSION_STATUS.UNAUTHORIZED));
      return;
    }
  } catch (error) {
    dispatch(setSessionStatus(SESSION_STATUS.UNAUTHORIZED));
    ActionErrorHandler.handleFunction(error, 'authorize', {
      breadCrumb: true,
    });
  }
};

export const unAuthorize = (): AsyncAction => async dispatch => {
  try {
    dispatch(setSessionStatus(SESSION_STATUS.UN_AUTHORIZING));

    SetupAPI.clearHeaderToken();
    dispatch(clearSession());
    // TODO: call API revoke token here
    dispatch(setSessionStatus(SESSION_STATUS.UNAUTHORIZED));
  } catch (error) {
    dispatch(setSessionStatus(SESSION_STATUS.UNAUTHORIZED));
    ActionErrorHandler.handleFunction(error, 'unAuthorize', {
      breadCrumb: true,
    });
  }
};

export const login = (
  params: LoginAPIParameters,
): AsyncAction<Promise<LoginResultType>> => async dispatch => {
  const result: LoginResultType = { success: false, error: undefined };
  try {
    dispatch({ type: types.LOGIN_REQUEST });
    const response = await SessionAPI.login(params);

    console.log('login response', response);

    const {
      data: { access_token },
    } = response;
    // set token
    await dispatch(authorize(access_token));
    dispatch({ type: types.LOGIN_SUCCESS });

    result.success = true;
  } catch (error) {
    result.error = error?.response?.data?.message || '';
    dispatch({ type: types.LOGIN_FAILURE });
    ActionErrorHandler.handleFunction(error, 'handleLogin', {
      breadCrumb: true,
    });
  }
  return result;
};

export const logout = (): AsyncAction => async dispatch => {
  await dispatch(unAuthorize());
};
