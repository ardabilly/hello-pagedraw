import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FormGuest from './pagedraw/form_guest';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormGuest
          greeting={`Hi, Muhibbudin`}
        />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
