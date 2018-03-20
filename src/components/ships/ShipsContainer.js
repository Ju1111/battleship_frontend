import React, { Component } from 'react';
import Board from './Board'
import Ships from './Ship'
import './ShipsContainer.css'

class PlaceShips extends Component {
  render() {
    return (
      <div className="Page">
        <div className="BoardAndShips">
          <Board />
          <Ships />
        </div>
      </div>
    )
  }
}

export default PlaceShips
