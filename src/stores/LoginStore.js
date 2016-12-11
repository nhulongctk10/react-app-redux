var Redux = require('redux'),
	thunk = require('redux-thunk'),
	loginReducer = require('../reducers/loginReducer');

var createStoreWithMiddleware = Redux.applyMiddleware(
	thunk
)(Redux.createStore);

module.exports = (function configureStore(initialState) {
	return createStoreWithMiddleware(Redux.combineReducers({
		loginReducer: loginReducer
	}), initialState);
})();