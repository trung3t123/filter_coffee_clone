import produce from 'immer';
import { persistReducer, PersistConfig } from 'redux-persist';
import MMKVStorage from 'react-native-mmkv-storage';
import * as types from './action_types';
import { SessionStates } from './types';
import { SESSION_STATUS } from 'constants/session';
import { ACTION_STATES } from 'data/config';

const authInitialState: SessionStates = {
  auth: {
    access_token: '',
    expires: '',
    token_type: '',
    created_at: '',
    expires_in: '',
  },
  status: SESSION_STATUS.UNAUTHORIZED,
  register_status: ACTION_STATES.IDLE,
  login_status: ACTION_STATES.IDLE,
};

const authReducer = (
  state = authInitialState,
  { type, payload }: { type: string; payload: Record<string, any> },
) => {
  return produce(state, draft => {
    switch (type) {
      case types.REGISTER_REQUEST:
        draft.register_status = ACTION_STATES.LOADING;
        break;

      case types.REGISTER_SUCCESS:
        draft.register_status = ACTION_STATES.COMPLETED;
        break;

      case types.REGISTER_FAILURE:
        draft.register_status = ACTION_STATES.ERROR;
        break;

      case types.LOGIN_REQUEST:
        draft.login_status = ACTION_STATES.LOADING;
        break;

      case types.LOGIN_SUCCESS:
        draft.login_status = ACTION_STATES.COMPLETED;
        break;

      case types.LOGIN_FAILURE:
        draft.login_status = ACTION_STATES.ERROR;
        break;

      case types.UPDATE_TOKEN:
        draft.auth.access_token = payload.access_token;
        draft.auth.token_type = payload.token_type;
        draft.auth.created_at = payload.created_at;
        draft.auth.expires_in = payload.expires_in;
        break;

      case types.SET_SESSION_STATUS:
        draft.status = payload.status;
        break;

      case types.CLEAR:
        draft = { ...authInitialState };
        break;

      default:
        return state;
    }
  });
};

const AuthStore = new MMKVStorage.Loader()
  .withInstanceID('AUTH')
  .withEncryption()
  .encryptWithCustomKey('AUTH_KEY', true, 'auth')
  .initialize();

const persistConfig: PersistConfig<any> = {
  key: 'TUSHARE@session',
  storage: AuthStore,
  timeout: undefined,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export default persistedReducer;
