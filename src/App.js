import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DateApp from './components/DateApp'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } alt="logo" className="logo" />
          <h1 className="App-title">Datin'</h1>
        </header>
        <DateApp />
      </div>
    );
  }
}

export default App;
