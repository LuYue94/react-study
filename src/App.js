import React, { Component } from 'react';

import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <aside className="app_aside">
          <ul>
            {/* <Link to="/React">React基础</Link>
            <Link>Ant Design</Link>
            <Link>Component</Link>
            <Link>高阶</Link> */}
          </ul>
          <img src={logo} className="App-logo" alt="logo" />
        </aside>
        <section className="app_container">

        </section>
      </div>
    );
  }
}

export default App;
