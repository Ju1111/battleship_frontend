import React, { Component } from 'react';
import Board from './Board'
import Ship from './Ship'
import LockButton from './LockButton'
import './ShipsContainer.css'
import {getGames, joinGame, updateGame} from '../../actions/types'
import {Redirect} from 'react-router-dom'

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

    if (!authenticated) return (
			<Redirect to="/login" />
		)

    if (game === null || users === null) return 'Loading...'
    if (!game) return 'Not found'

    return (
      <div>
        <div>
          <h1>Game #{game.id}</h1>
        </div>
        <div className="BoardAndShips">
          <Board />
          <div>
            <h2>Please select a ship to place it on your board</h2>
            <Ship
              length={ 5 }
              name={ "carrier" }
              value={'5'}
            />
            <Ship
              length={ 4 }
              name={ "battleship" }
              value={'4'}
            />
            <Ship
              length={ 3 }
              name={ "cruiser" }
              value={'3'}
            />
            <Ship
              length={ 3 }
              name={ "submarine" }
              value={'2'}
            />
            <Ship
              length={ 2 }
              name={ "destroyer" }
              value={'1'}
            />
          </div>
        </div>
        <LockButton />
      </div>
    )
  }
}

export default PlaceShips
