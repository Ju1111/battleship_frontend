import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Square from './Square'
import './Boards.css'
import { connect } from 'react-redux'

export class Board1 extends PureComponent {
  static propTypes = {
    board1: PropTypes.arrayOf(
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
        x={ index }
        y={ rowIndex }
      />
    )
  }

  render() {
    return (
      <div className="Board1">
        { this.props.board1.map(this.renderRow) }
      </div>
    )
  }
}

const mapStateToProps = ({ board: { board1 }  }) => ({ board1 })

export default connect (mapStateToProps)(Board1)
