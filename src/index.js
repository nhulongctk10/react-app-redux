var React = require('react'),
	ReactDOM =require('react-dom'),
	{ Provider } = require('react-redux'),
	{ createStore, applyMiddleware } = require('redux'),
	{ Router, Route, browserHistory } = require('react-router');

import BasePage from './components/BasePage';
import Resources from './components/resources';
var LoginReducer =require('./reducers/LoginReducer');
var Login = require('./components/login/Login');
var Register = require('./components/register/Register');

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(LoginReducer)}>
  	<Router history={browserHistory}>
  		<Route path="/" component={BasePage}>
  			<Route path="/login" component={Resources}>
  			</Route>
  			<Route path="/register" component={Register}>
  			</Route>
  		</Route>
  	</Router>
  </Provider>
  , document.getElementById('app'));
