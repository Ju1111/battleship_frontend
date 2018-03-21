import { SELECT_SHIP } from './types'

export const selectShip = (name) => {
  return {
    type: 'SELECT_SHIP',
    payload: {
      name
    }
  }
}
