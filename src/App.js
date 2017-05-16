import React, { Component } from 'react';
import Table from './Table.js';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to your death</h2>
          <h4>Play at your own risk</h4>
        </div>
        <Table/>
      </div>
    );
  }
}

export default App;
