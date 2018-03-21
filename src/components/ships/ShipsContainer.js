import React, { Component } from 'react';
import Board from './Board'
import Ship from './Ship'
import LockButton from './LockButton'
import './ShipsContainer.css'
import {getGames, joinGame, updateGame} from '../../actions/types'

class PlaceShips extends Component {

  componentWillMount() {
    if (this.props.authenticated) {
      if (this.props.game === null) this.props.getGames()
      if (this.props.users === null) this.props.getUsers()
    }
  }

  //here or in GameContainer or both?
  joinGame = () => this.props.joinGame(this.props.game.id)

  render() {
    const {game, users, authenticated, userId} = this.props


    return (
      <div className="Page">
        <header className="App-header">
          <h1 className="App-title">Battleship</h1>
        </header>
        <div className="BoardAndShips">
          <Board />
          <div>
            <h2>Please select a ship to place it on your board</h2>
            <Ship
              length={ 5 }
              name={ "carrier" }
            />
            <Ship
              length={ 4 }
              name={ "battleship" }
            />
            <Ship
              length={ 3 }
              name={ "cruiser" }
            />
            <Ship
              length={ 3 }
              name={ "submarine" }
            />
            <Ship
              length={ 2 }
              name={ "destroyer" }
            />
          </div>
        </div>
        <LockButton />
      </div>
    )
  }
}

export default PlaceShips
