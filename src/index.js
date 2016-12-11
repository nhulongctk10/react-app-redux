<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import Login from './components/login/Login';
import Resource from './components/bookList';
import App from './components/app';
import reducers from './reducers';
=======
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
>>>>>>> 9e89172e98715e6057ec64bd30976b5af8c1b967

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(LoginReducer)}>
  	<Router history={browserHistory}>
<<<<<<< HEAD
  		<Route path="/" component={App}>
            <Route path="login" component={Login}></Route>
            <Route path="resource" component={Resource}></Route>
        </Route>
=======
  		<Route path="/" component={BasePage}>
  			<Route path="/login" component={Resources}>
  			</Route>
  			<Route path="/register" component={Register}>
  			</Route>
  		</Route>
>>>>>>> 9e89172e98715e6057ec64bd30976b5af8c1b967
  	</Router>
  </Provider>
  , document.getElementById('app'));
