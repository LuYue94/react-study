import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import { home } from "./view/home/home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <aside>
          <img src={logo} className="App-logo" alt="logo" />
        </aside>
        <section>

        </section>
      </div>
    );
  }
}

export default App;
