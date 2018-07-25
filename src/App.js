import React, { Component } from 'react';
import Stopwatch from './Stopwatch.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stopwatch/>
      </div>
    );
  }
}

export default App;