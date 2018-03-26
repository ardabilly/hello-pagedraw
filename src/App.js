import React, { Component } from 'react';
import HelloWorld from './pagedraw/hello_world'

import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      fullname: ''
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(evt) {
    console.log('adasdasd')
    this.setState({fullname: evt.target.value});
  }

  handleClick() {
    alert(this.state.fullname)
  }

  render() {
    return (
      <HelloWorld
        handleChange={this.handleChange}
        handleClick={this.handleClick}
      />
    );
  }
}

export default App;
