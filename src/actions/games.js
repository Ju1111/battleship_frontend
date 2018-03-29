import * as request from 'superagent'
import {baseUrl} from '../constants'
import { ADD_GAME, UPDATE_GAME, UPDATE_GAMES, JOIN_GAME_SUCCESS, UPDATE_GAME_SUCCESS, ADD_BOARDS } from './types'

export const getGames = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/games`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: UPDATE_GAMES,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const joinGame = (gameId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .post(`${baseUrl}/games/${gameId}/players`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: JOIN_GAME_SUCCESS,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const createGame = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .post(`${baseUrl}/games`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: ADD_BOARDS,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const updateGame = (gameId, board) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .patch(`${baseUrl}/games/${gameId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({board})
    .then(result => {
      dispatch({
        type: UPDATE_GAME_SUCCESS
      })
    })
    .catch(err => console.error(err))
}
