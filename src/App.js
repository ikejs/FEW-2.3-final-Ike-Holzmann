import React, { Component } from 'react';
import './App.css';
import Home from './Home'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charNum: 0
    };
  }
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
