var React = require('react'),
	ReactDOM =require('react-dom'),
	{ Provider } = require('react-redux'),
	{ createStore, applyMiddleware } = require('redux'),
	{ Router, Route, browserHistory } = require('react-router');

// import BasePage from './components/BasePage';
// import Resources from './components/resources';
// var LoginReducer =require('./reducers/LoginReducer');
// var Login = require('./components/login/Login');
// var Register = require('./components/register/Register');
var Demo = require("../demo/Demo");

// const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Demo />,
  document.getElementById("app")
);
