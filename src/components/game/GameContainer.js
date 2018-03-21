import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import {getGames, joinGame, updateGame} from '../../actions/types'
import Board1 from './Board1'
import Board2 from './Board2'

class dogSwipe extends Component {

  componentWillMount() {
    if (this.props.authenticated) {
      if (this.props.game === null) this.props.getGames()
      if (this.props.users === null) this.props.getUsers()
    }
  }

  render() {
    return(
      <div className="Page">
        <Board1 />
        <Board2 />
      </div>
    );
  }
}


const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps)(dogSwipe)
