import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Leaderboard from './leaderboard.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
        <Leaderboard />
        </div>
      </div>
    );
  }
}

export default App;



//https://fcctop100.herokuapp.com/api/fccusers/top/recent
// get https://fcctop100.herokuapp.com/api/fccusers/top/alltime
