import React, { PureComponent } from 'react'
import './LockButton.css'
import { sendBoard } from '../../actions/sendBoard'
import { connect } from 'react-redux'
import {existsOnBoard} from '../../lib/functions'
import {userId} from '../../jwt'


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
        Ready to sink some ships?
      </button>
    )
  }
}

const mapStateToProps = (state,props) => ({
  authenticated: state.currentUser !== null,
  userId: state.currentUser && userId(state.currentUser.jwt),
  game: state.games && state.games[props.match.params.id],
  users: state.users,
  shipBoard: state.shipBoard
})

export default connect (mapStateToProps, {sendBoard})(LockButton)
