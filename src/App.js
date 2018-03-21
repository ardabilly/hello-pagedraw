import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FormGuest from './pagedraw/form_guest';

class App extends Component {
  constructor() {
      super();
      this.state = {
        greet: '',
        message: '',
      }

      this.changeGreeting = this.changeGreeting.bind(this);
      this.showAlert = this.showAlert.bind(this);
      this.getMessage = this.getMessage.bind(this);
  }

  changeGreeting(evt) {
    this.setState({
      greet: evt.target.value
    });
  }

  getMessage(evt) {
    this.setState({
      message: evt.target.value
    });
  }

  showAlert() {
    alert(`Hi ${this.state.greet}, this is my message : ${this.state.message}`);
  }

  render() {
    return (
      <div className="App">
        <FormGuest
          greeting={this.state.greet}
          changeGreeting={this.changeGreeting}
          showAlert={this.showAlert}
          getMessage={this.getMessage}
        />
      </div>
    );
  }
}

export default App;
