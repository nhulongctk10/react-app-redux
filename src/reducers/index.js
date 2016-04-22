import { combineReducers } from 'redux';
import loginReducer from './LoginReducer';

const rootReducer = combineReducers({
  authenticated: loginReducer
});

export default rootReducer;
