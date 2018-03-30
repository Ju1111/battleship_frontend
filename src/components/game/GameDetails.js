import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import {withRouter} from 'react-router'
import './GameDetails.css'

class GameDetails extends PureComponent {

  join =() => {
    const {game,history} = this.props
    history.push(`/games/${game.id}`)
  }
  buttonText = (players) => {
    return "Join"
  }
  render() {
    const {game,users,userId} = this.props
    const playerIds = game.players.map(player => player.userId)

    if (game.status==="finished") return null

    return (
      <Card key={game.id} className="game-card">
        <CardContent>
          <Typography color="textSecondary">
            This game is played by&nbsp;
            {
              game.players
                .map(player => {
                  if (player.userId===userId) return 'you'
                  return users[player.userId].firstName
                })
                .join(' and ')
            }
          </Typography>
          <Typography variant="headline" component="h2">
            Game #{game.id}
          </Typography>
          <Typography color="textSecondary">
            Status: {game.status}
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            size="small"
            onClick={this.handleClick}
          >
            {
              this.buttonText(playerIds)
            }
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default withRouter(
  connect(null)(GameDetails)
)
