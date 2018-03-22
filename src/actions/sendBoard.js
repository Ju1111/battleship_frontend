import {SEND_BOARD} from './types'

export const sendBoard=(board)=> {
  return{
    type: SEND_BOARD,
    payload:'SEND IT TO THE BACK END'
  }
}
