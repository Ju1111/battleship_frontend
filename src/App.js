import React, { Component } from 'react';
import './App.css';
// import Board1 from './components/game/Board1'
// import Board2 from './components/game/Board2'
import PlaceShips from './components/ships/ShipsContainer'
import GameBattle from './components/game/GameContainer'
import GamesList from './components/game/GamesList'
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/signup/SignupPage'
import LogoutPage from './components/logout/LogoutPage'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header className="App-header">
            <h1 className="App-title">Battleship</h1>
          </header>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route exact path="/signup" component={SignupPage} />
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
