import { combineReducers } from 'redux';
<<<<<<< HEAD
import authenticationReducer from './authReducer';
import bookReducer from './bookReducer';

const rootReducer = combineReducers({
  books: bookReducer,
  auth: authenticationReducer
=======
import loginReducer from './LoginReducer';

const rootReducer = combineReducers({
  authenticated: loginReducer
>>>>>>> 9e89172e98715e6057ec64bd30976b5af8c1b967
});

export default rootReducer;
