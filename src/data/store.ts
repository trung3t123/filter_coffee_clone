import { applyMiddleware, createStore, Middleware, Store } from 'redux';
import MMKVStorage from 'react-native-mmkv-storage';

/**
 * Middleware
 */
import thunk from 'redux-thunk';
import {
  persistReducer,
  persistStore,
  PersistConfig,
  Persistor,
} from 'redux-persist';

import Platform from 'utils/platform';
import appReducer from './combinedReducer';

const ApplicationStore = new MMKVStorage.Loader()
  .withInstanceID('APP')
  .initialize();

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: ApplicationStore,
  whitelist: ['session'],
};

const finalReducer = persistReducer(persistConfig, appReducer);

const finalMiddleware: Middleware[] = [];

finalMiddleware.push(thunk);

let persistor: Persistor;
let store: Store;

export function configStore() {
  if (store && persistor) {
    return { store, persistor };
  }

  if (Platform.isDev) {
    const createDebugger = require('redux-flipper').default;
    finalMiddleware.push(createDebugger());
  }

  store = createStore(finalReducer, applyMiddleware(...finalMiddleware));

  persistor = persistStore(store);
  return { store, persistor };
}
