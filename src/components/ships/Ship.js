import React, { PureComponent } from 'react'
import './Ship.css'
import PropTypes from 'prop-types'
import { selectShip } from '../../actions/selectShip'
import { connect } from 'react-redux'

class Ship extends PureComponent {
  static PropTypes = {
    length: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    selectShip: PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.selectShip(this.props.name)
  }


  render () {
    return (
      <div className={`${this.props.name}`} onClick={this.handleClick}></div>
    )
  }
}

const mapStateToProps = ({ ship: { ship } }) => ({ ship })

export default connect(mapStateToProps, { selectShip })(Ship)
