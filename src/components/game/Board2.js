import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Square from './Square'
import './Boards.css'
import { connect } from 'react-redux'

export class Board2 extends PureComponent {
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
        x={ index }
        y={ rowIndex }
      />
    )
  }

  render() {
    return (
      <div className="Board2">
        { this.props.board2.map(this.renderRow) }
      </div>
    )
  }
}

const mapStateToProps = ({ board: { board2 }  }) => ({ board2 })

export default connect (mapStateToProps)(Board2)
