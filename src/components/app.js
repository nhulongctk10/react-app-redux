import React from 'react';
import { Component } from 'react';
import Header from './header';
import Login from './login/Login';
import DevTools from './../containers/DevTools';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          {this.props.children}
        </div>
        <DevTools />
      </div>
    )
  }
}