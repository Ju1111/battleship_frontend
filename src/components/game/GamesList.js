import React, {PureComponent} from 'react'
import {getGames, createGame} from '../../actions/games'
import {getUsers} from '../../actions/users'
import {connect} from 'react-redux'
import {Redirect, Link} from 'react-router-dom'
import {userId} from '../../jwt'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import GameDetails from './GameDetails'
import {withRouter} from 'react-router'
import './GamesList.css'

class GamesList extends PureComponent {
  componentWillMount() {
    if (this.props.authenticated) {
      if (this.props.games === null) this.props.getGames()
      if (this.props.users === null) this.props.getUsers()
    }
  }

  renderGame = (game) => {
    const {users, userId} = this.props
    const players = game.players.map(player => player.userId)
    return (
      <GameDetails
        key={game.id}
        game={game} users={users} userId={userId}
        players={players}
      />
    )
  }

  render() {
    const {games, users, authenticated, createGame, history} = this.props

    if (!authenticated) return (
			<Redirect to="/login" />
		)

    if (games === null || users === null) return null

    return (<Paper class="outer-paper">
      <Button
        color="primary"
        variant="raised"
        onClick={createGame}
        className="create-game"
      >
        Create Game
      </Button>
      <Button
        color="default"
        variant="raised"
        onClick={() => history.push('/logout')}>
        Leave the ship
      </Button>
      <div>
        {games.map(game => this.renderGame(game))}
      </div>
    </Paper>)
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  userId: state.currentUser && userId(state.currentUser.jwt),
  users: state.users === null ? null : state.users,
  games: state.games === null ?
    null : Object.values(state.games).sort((a, b) => b.id - a.id)
})

export default withRouter(
  connect(mapStateToProps, {getGames, getUsers, createGame})(GamesList)
)
