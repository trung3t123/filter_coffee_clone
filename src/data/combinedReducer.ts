import { combineReducers } from 'redux';

import sessionReducer from './session/reducer';

/**
 * Final Reducer
 */
const appReducer = combineReducers({
  session: sessionReducer,
});

export default appReducer;
