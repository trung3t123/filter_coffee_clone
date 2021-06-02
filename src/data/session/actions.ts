import SetupAPI from 'api/config';
import { AsyncAction } from 'data/types';
import { SESSION_STATUS } from 'constants/session';
import ActionErrorHandler from 'utils/error-handler/action';

import SessionAPI from 'api/session/session';
import {
  LoginAPIParameters,
  SignUpAPIParameters,
  UpdateUserNameParameter,
  UpdateFollowThemeParameter,
} from 'api/session/session.types';

import * as sessionReducerTypes from './action_reducer_types';
import SessionSelector from './selectors';
import {
  LoginResultType,
  SignUpResultType,
  UpdateUserNameResultType,
} from './types';
import { Alert } from 'react-native';

export const setSessionStatus = (status: string) => ({
  type: sessionReducerTypes.SET_SESSION_STATUS,
  payload: { status },
});

export const updateToken = (token: string = '') => ({
  type: sessionReducerTypes.UPDATE_TOKEN,
  payload: { access_token: token },
});

export const clearSession = () => ({
  type: sessionReducerTypes.CLEAR,
});

export const authorize = (newAccessToken?: string): AsyncAction => async (
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
    dispatch({ type: sessionReducerTypes.LOGIN_REQUEST });
    const response = await SessionAPI.login(params);

    const {
      data: { token },
    } = response;
    // set token
    await dispatch(authorize(token));
    dispatch({ type: sessionReducerTypes.LOGIN_SUCCESS });

    result.success = true;
  } catch (error) {
    result.error = error?.data?.response?.data?.message || '';

    Alert.alert('error', result.error);

    dispatch({ type: sessionReducerTypes.LOGIN_FAILURE });

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
    dispatch({ type: sessionReducerTypes.REGISTER_REQUEST });
    const response = await SessionAPI.signUp(params);

    const {
      data: { token },
    } = response;

    SetupAPI.setHeaderToken(token, 'redux:action:authorize');
    dispatch({ type: sessionReducerTypes.REGISTER_SUCCESS });

    result.success = true;
  } catch (error) {
    console.log(error?.data, { error }, '>>>>>>>>>>>>>>>>>>>>');

    result.error = error?.data?.response?.data?.message || '';
    Alert.alert('error', result.error);
    dispatch({ type: sessionReducerTypes.REGISTER_FAILURE });
    ActionErrorHandler.handleFunction(error, 'handleSignUp', {
      breadCrumb: true,
    });
  }
  return result;
};

export const updateUserName = (
  params: UpdateUserNameParameter,
): AsyncAction<Promise<UpdateUserNameResultType>> => async () => {
  const result: UpdateUserNameResultType = { success: false, error: undefined };
  try {
    await SessionAPI.updateUserName(params);

    result.success = true;
  } catch (error) {
    result.error = error?.data?.response?.data?.message || '';
    Alert.alert('error', result.error);
    ActionErrorHandler.handleFunction(error, 'updateUserName', {
      breadCrumb: true,
    });
  }
  return result;
};

export const updateFollowTheme = (
  params: UpdateFollowThemeParameter,
): // params: UpdateFollowThemeParameter,
AsyncAction<Promise<UpdateUserNameResultType>> => async dispatch => {
  const result: UpdateUserNameResultType = { success: false, error: undefined };
  try {
    await SessionAPI.updateFollowTheme(params);

    dispatch(authorize());

    result.success = true;
  } catch (error) {
    result.error = error?.data?.response?.data?.message || '';
    Alert.alert('error', result.error);
    ActionErrorHandler.handleFunction(error, 'updateFollowTheme', {
      breadCrumb: true,
    });
  }
  return result;
};

export const logout = (): AsyncAction => async dispatch => {
  await dispatch(unAuthorize());
};
