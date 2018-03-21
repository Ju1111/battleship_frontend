import { SELECT_SHIP } from '../actions/types'

const initialState = {
  destroyer: ['1', '1'],
  submarine: ['2', '2', '2'],
  cruiser: ['3', '3', '3'],
  battleship: ['4', '4', '4', '4'],
  carrier: ['5', '5', '5', '5', '5']
}

export default (state = initialState, { type, payload } = {}) => {
  switch(type) {
    case SELECT_SHIP:
      return initialState[payload.name]
  default: return state
  }
}
