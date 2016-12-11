import { combineReducers } from 'redux';
import authenticationReducer from './authReducer';
import bookReducer from './bookReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  books: bookReducer,
  auth: authenticationReducer,
  login: loginReducer
});

export default rootReducer;
