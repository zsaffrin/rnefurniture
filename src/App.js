import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">RNE Furniture</h1>
        </header>
        <p className="App-intro">
          Version 4 in progress
        </p>
      </div>
    );
  }
}

export default App;
