import React, { PureComponent } from 'react'
//import PropTypes from 'prop-types'
import './LockButton.css'
import { sendBoard } from '../../actions/sendBoard'
import { connect } from 'react-redux'
import {existsOnBoard} from '../../lib/functions'


class LockButton extends PureComponent {
  // static PropTypes = {
  //   lockBoard: PropTypes.function.isRequired
  // }

  handleClick = (event) => {
    const board=this.props.shipBoard
    if (existsOnBoard(board,'1') && existsOnBoard(board,'2') && existsOnBoard(board,'3') &&
        existsOnBoard(board,'4') && existsOnBoard(board,'5'))
      this.props.sendBoard(this.props.shipBoard)
  }

  render() {
    return (
      <button
        className="Button"
        onClick={this.handleClick}
      >
        Ship Ahoi!
      </button>
    )
  }
}

export default connect (({shipBoard})=>({shipBoard}), {sendBoard})(LockButton)
