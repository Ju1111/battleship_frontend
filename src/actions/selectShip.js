import { SELECT_SHIP } from './types'

export const selectShip = (ship) => {
  return {
    type: 'SELECT_SHIP',
    payload: {
      ship
    }
  }
}
