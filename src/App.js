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
      </div>
    );
  }
}

export default App;
