import { combineReducers } from 'redux';
import authenticationReducer from './authentication';
import usersReducer from './users';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
  auth: authenticationReducer,
  users: usersReducer,
  form: formReducer
});
export default rootReducer;
