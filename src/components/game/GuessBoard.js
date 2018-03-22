import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Square from './Square'
import './GuessBoard.css'
import { connect } from 'react-redux'

export class GuessBoard extends PureComponent {
  static propTypes = {
    board2: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.string)
    ).isRequired
  }

  renderRow = (row, index) => {
    return (
      <div key={ index } className="row">
        { row.map(this.renderSquare(index)) }
      </div>
    )
  }

  renderSquare = rowIndex => (value, index) => {
    return (
      <Square
        key={ index }
        value={ value }
        x={ rowIndex }
        y={ index }
      />
    )
  }

  render() {
    return (
      <div className="GuessBoard">
        { this.props.board2.map(this.renderRow) }
      </div>
    )
  }
}

const mapStateToProps = ({ board: { board2 }  }) => ({ board2 })

export default connect (mapStateToProps)(GuessBoard)
