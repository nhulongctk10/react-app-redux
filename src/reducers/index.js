import { combineReducers } from 'redux';
import authenticationReducer from './authReducer';
import bookReducer from './bookReducer';

const rootReducer = combineReducers({
  books: bookReducer,
  auth: authenticationReducer
});

export default rootReducer;
