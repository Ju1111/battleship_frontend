import React, { Component } from 'react';
import './App.css';
import Board from './components/game/Board'
import GuessBoard from './components/game/GuessBoard'
import PlaceShips from './components/ships/ShipsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Battleship</h1>
        </header>
        <div className="Boards">
          <Board />
          <GuessBoard/>
        </div>
      </div>
    );
  }
}

export default App;
