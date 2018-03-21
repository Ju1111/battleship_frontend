import { SELECT_SHIP } from '../actions/types'

const initialState = {
  ship1: ['1', '1'],
  ship2: ['2', '2', '2'],
  ship3: ['3', '3', '3'],
  ship4: ['4', '4', '4', '4'],
  ship5: ['5', '5', '5', '5', '5']
}

export default (state = initialState, { type, payload } = {}) => {
  switch(type) {
    case SELECT_SHIP:
      return state.payload
  default: return state
  }
}
