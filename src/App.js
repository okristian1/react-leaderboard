import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Leaderboard from './components/leaderboard.js';

class App extends Component {
  render() {
  return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Leaderboard</h1>
        </div>
        <div>
        <Leaderboard />
        </div>
      </div>
    );
  }
}

export default App;
