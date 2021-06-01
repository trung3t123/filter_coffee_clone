import SetupAPI from 'api/config';
import { AsyncAction } from 'data/types';
import { SESSION_STATUS } from 'constants/session';
import ActionErrorHandler from 'utils/error-handler/action';

import SessionAPI from 'api/session';
import { LoginAPIParameters, SignUpAPIParameters } from 'api/session.types';

import * as types from './action_types';
import SessionSelector from './selectors';
import { LoginResultType, SignUpResultType } from './types';
import { Alert } from 'react-native';

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

    const {
      data: { token },
    } = response;
    // set token
    await dispatch(authorize(token));
    dispatch({ type: types.LOGIN_SUCCESS });

    result.success = true;
  } catch (error) {
    result.error = error?.data?.response?.data?.message || '';
    Alert.alert('error', result.error);
    dispatch({ type: types.LOGIN_FAILURE });
    ActionErrorHandler.handleFunction(error, 'handleLogin', {
      breadCrumb: true,
    });
  }
  return result;
};

export const signUp = (
  params: SignUpAPIParameters,
): AsyncAction<Promise<SignUpResultType>> => async dispatch => {
  const result: SignUpResultType = { success: false, error: undefined };
  try {
    dispatch({ type: types.LOGIN_REQUEST });
    await SessionAPI.signUp(params);

    // const {
    //   data: { token },
    // } = response;
    // set token

    // await dispatch(authorize(token));
    // dispatch({ type: types.LOGIN_SUCCESS });

    result.success = true;
  } catch (error) {
    result.error = error?.data?.response?.data?.message || '';
    Alert.alert('error', result.error);
    dispatch({ type: types.REGISTER_FAILURE });
    ActionErrorHandler.handleFunction(error, 'handleSignUp', {
      breadCrumb: true,
    });
  }
  return result;
};

export const logout = (): AsyncAction => async dispatch => {
  await dispatch(unAuthorize());
};
