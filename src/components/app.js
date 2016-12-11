import React from 'react';
import { Component } from 'react';
import Header from './header';
import Login from './login/Login';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="jumbotron">
            <h2>Welcome to Redux</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti soluta, 
            enim iste saepe fugiat recusandae ut atque voluptate ducimus laudantium sint suscipit animi, 
            praesentium neque deserunt culpa quam laboriosam necessitatibus.</p>
          </div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
