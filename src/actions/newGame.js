import { NEW_GAME } from './types'

export const createGame = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .post(`${baseUrl}/games`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: ADD_GAME,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}
