import React, { Component } from 'react';
import Board from './Board'
import Ship from './Ship'
import LockButton from './LockButton'
import './ShipsContainer.css'

class PlaceShips extends Component {
  render() {
    return (
      <div className="Page">
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
