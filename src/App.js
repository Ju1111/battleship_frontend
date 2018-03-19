import React, { Component } from 'react';
import './App.css';
import Board1 from './components/game/Board1'
import Board2 from './components/game/Board2'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Battleship</h1>
        </header>
        <div className="Boards">
          <Board1 />
          <Board2 />
        </div>
      </div>
    );
  }
}

export default App;
