import React, { PureComponent } from 'react'
import './Ship.css'
import PropTypes from 'prop-types'
// import { selectShip } from '../../actions/selectShip'

class Ship extends PureComponent {
  static PropTypes = {
    length: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }

  render () {
    return (
      <div className={`${this.props.name}`}></div>
    )
  }
}

export default Ship
