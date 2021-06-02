import produce from 'immer';
import { persistReducer, PersistConfig } from 'redux-persist';
import MMKVStorage from 'react-native-mmkv-storage';
import * as homeReducerTypes from './action_reducer_types';
import { HomeStates, PostTypes } from './types';
import { ACTION_STATES } from 'data/config';

const homeInitialState: HomeStates = {
  listPosts: [],
  listIdPosts: [],
  getListPostsStatus: ACTION_STATES.IDLE,
};

const homeReducer = (
  state = homeInitialState,
  { type, payload }: { type: string; payload: Record<string, any> },
) => {
  return produce(state, (draft: HomeStates) => {
    switch (type) {
      case homeReducerTypes.REQUEST_LIST_POSTS:
        draft.getListPostsStatus = ACTION_STATES.LOADING;
        break;

      case homeReducerTypes.REQUEST_LIST_POSTS_SUCCESS:
        draft.getListPostsStatus = ACTION_STATES.COMPLETED;
        draft.listPosts = payload.listPosts;
        draft.listIdPosts = payload.listPosts.map((post: PostTypes) => post.id);
        break;

      case homeReducerTypes.REQUEST_LIST_POSTS_FAILURE:
        draft.getListPostsStatus = ACTION_STATES.ERROR;
        break;

      case homeReducerTypes.RESET_HOME_STATE:
        draft = { ...homeInitialState };
        break;

      default:
        return state;
    }
  });
};

const AuthStore = new MMKVStorage.Loader()
  .withInstanceID('HOME')
  .withEncryption()
  .encryptWithCustomKey('HOME_KEY', true, 'home')
  .initialize();

const persistConfig: PersistConfig<any> = {
  key: 'COFFEE@home',
  storage: AuthStore,
  timeout: undefined,
  // whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, homeReducer);

export default persistedReducer;
