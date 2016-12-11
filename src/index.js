import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import Login from './components/login/Login';
import Resource from './components/bookList';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<Router history={browserHistory}>
  		<Route path="/" component={App}>
            <Route path="login" component={Login}></Route>
            <Route path="resource" component={Resource}></Route>
      </Route>
  	</Router>
  </Provider>
  , document.getElementById('app'));
