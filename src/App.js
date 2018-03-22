import React, { Component } from 'react';
import './App.css';
import PlaceShips from './components/ships/ShipsContainer'
import GameBattle from './components/game/GameContainer'
import GamesList from './components/game/GamesList'
import LoginPage from './components/login/LoginPage'
import LogoutPage from './components/logout/LogoutPage'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Battleship</h1>
          </header>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route exact path="/games" component={GamesList} />
          <Route exact path="/games/:id/ships" component={PlaceShips} />
          <Route exact path="/games/:id" component={GameBattle} />
          <Route exact path="/" render={ () => <Redirect to="/games" /> } />
        </div>
      </Router>
    );
  }
}

export default App;
