import React, { PureComponent } from 'react'
import './Ship.css'
import PropTypes from 'prop-types'
import { selectShip } from '../../actions/selectShip'
import { connect } from 'react-redux'

class Square extends PureComponent {
  static PropTypes = {
    value: PropTypes.string.isRequired,
    selectShip: PropTypes.func.isRequired
  }

  handleClick = () => {
    const { selectShip } = this.props
    return selectShip()
  }

  render () {
    return (
      <div className="Ship" onClick={this.handleClick}/>
    )
  }
}

export default connect (null, { selectShip })(Square)
