import { combineReducers } from 'redux';

import sessionReducer from './session/reducer';
import homeReducer from './home/reducer';

/**
 * Final Reducer
 */
const appReducer = combineReducers({
  session: sessionReducer,
  home: homeReducer,
});

export default appReducer;
