import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import './LockButton.css'
import { lockBoard } from '../../actions/lockBoard'
import { connect } from 'react-redux'


class LockButton extends PureComponent {
  // static PropTypes = {
  //   lockBoard: PropTypes.function.isRequired
  // }

  handleClick = (event) => {
    this.props.lockBoard()
  }

  render() {
    return (
      <button
        className="Button"
        onClick={this.handleClick}
      >
        Ready to sink some ships?
      </button>
    )
  }
}

export default connect (null, {lockBoard})(LockButton)
