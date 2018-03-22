import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import {getGames, joinGame, updateGame} from '../../actions/games'
import {getUsers} from '../../actions/users'
import {userId} from '../../jwt'
import Board from './Board'
import GuessBoard from './GuessBoard'
import './GameContainer.css'

class GameBattle extends Component {

  //here or in ShipsContainer or both?
  joinGame = () => this.props.joinGame(this.props.game.id)

  makeMove = (toRow, toCell) => {
    const {game, updateGame} = this.props

    const board = game.board.map(
      (row, rowIndex) => row.map((cell, cellIndex) => {
        if (rowIndex === toRow && cellIndex === toCell) return game.turn
        else return cell
      })
    )
    updateGame(game.id, board)
  }

  render() {
    const {game, users, authenticated, userId} = this.props

    // if (game === null || users === null) return 'Loading...'
    // if (!game) return 'Not found'

    // const player = game.players.find(p => p.userId === userId)

    return (
      // <div>
      // <div class="outer-paper">
      //   <h1>Game #{game.id}</h1>
      //
      //   <p>Status: {game.status}</p>
      //
      //   {
      //     game.status === 'started' &&
      //     player && player.symbol === game.turn &&
      //     <div>Its your turn!</div>
      //   }
      //
      //   {
      //     game.status === 'pending' &&
      //     game.players.map(p => p.userId).indexOf(userId) === -1 &&
      //     <button onClick={this.joinGame}>Join Game</button>
      //   }
      //
      //   <hr />
      //
      //   {game.board.map(this.renderRow)}
      // </div>)
      <div>
      <header className="App-header">
        <h1 className="App-title">Battleship</h1>
      </header>
      <div className="Boards">
        <Board />
        <GuessBoard />
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  authenticated: state.currentUser !== null,
  userId: state.currentUser && userId(state.currentUser.jwt),
  game: state.games && state.games[props.match.params.id],
  users: state.users
})

const mapDispatchToProps = {
  getGames, getUsers, joinGame, updateGame
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBattle)
