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
