import { combineReducers } from 'redux';
import authenticationReducer from './authReducer';
import bookReducer from './bookReducer';
import loginReducer from './loginReducer';
import selectedBookReducer from './selectedBookReducer';

const rootReducer = combineReducers({
  books: bookReducer,
  auth: authenticationReducer,
  login: loginReducer,
  selectedBook: selectedBookReducer
});

export default rootReducer;
