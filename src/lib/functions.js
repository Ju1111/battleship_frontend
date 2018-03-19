//(x,y) will be coordinates of a square
export const free = (board, x,y) => {
  return board[x][y] === '0'
} // check if a square is free


export const rows = (board) => {
  return board
}

// Returns a transposed array of columns on the board
export const cols = (board) => {
  return board
    .map((row, y) => row.map((v, x) => board[x][y]))
}

//check if left side of a square is free for the boat
export const leftFree = (board, x, y, boatLength) => {
  if (y < boatLength-1) return false
  const last = y-(boatLength-1)
  //console.log(last);
  for (let i=last; i<y; i++) {
     if (!free(board, x, i)) return false
  }
  return true
}

//check if the right side of a square is free for the boat
export const rightFree = (board, x, y, boatLength) => {
  if ((board.length-y) < boatLength) return false

  for (let i=y+1; i<y+boatLength; i++)
    if (!free(board, x, i)) return false

  return true
}

//check if the above of a square is free for the boat
export const topFree = (board, x, y, boatLength) => {
  if (x < boatLength-1) return false
  const init = x-(boatLength-1)
  //console.log(last);
  for (let i=init; i<x; i++) {
     if (!free(board, i, y)) return false
  }
  return true
}

//check if below side of a square is free for the boat
export const bottomFree = (board, x, y, boatLength) => {
  if ((board.length-x) < boatLength) return false

  for (let i=x+1; i<x+boatLength; i++)
    if (!free(board, i, y)) return false

  return true
}
