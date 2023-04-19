import { combineReducers } from 'redux';
import { eventErrorsReducer } from './events';
import { sessionErrorsReducer } from './session';
import { userErrorsReducer } from './users';

export default combineReducers({
  session: sessionErrorsReducer,
  event: eventErrorsReducer,
  user: userErrorsReducer
});