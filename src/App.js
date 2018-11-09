import React, { Component } from 'react';

import logo from './logo.svg';
import './scss/App.scss';
import '../node_modules/highlight.js/styles/atom-one-dark.css'

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  Switch
} from 'react-router-dom'

import ReactV from './view/react/react'
import ReduxV from './view/redux/redux'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <aside className="app_aside">
            <ul>
              <li><a href="/">←返回主页</a></li>
              <li><NavLink to="/react">React v16.6</NavLink></li>
              <li><NavLink to="/redux">Redux</NavLink></li>
            </ul>
            <img src={logo} className="App-logo" alt="logo" />
          </aside>
          <section className="app_container">
            <div className="app_content">
              <Switch>
                <Route path="/react" component={ReactV} />
                <Route path="/redux" component={ReduxV} />
                <Redirect path="/" to={{ pathname: '/react' }} />
              </Switch>
            </div>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
