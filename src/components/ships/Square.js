import React, { PureComponent } from 'react'
import './Square.css'
import PropTypes from 'prop-types'
import { makeGuess } from '../../actions/makeGuess'
import { connect } from 'react-redux'

class Square extends PureComponent {
  static PropTypes = {
    value: PropTypes.string.isRequired,
    makeMove: PropTypes.func.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }

  handleClick = () => {
    const { x, y, makeGuess} = this.props
    return makeGuess(x,y)
  }

  render () {
    return (
      <div className="Square" onClick={this.handleClick}/>
    )
  }
}

export default connect (null, { makeGuess })(Square)
