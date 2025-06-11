export const hasCollision = (board, tetromino, position) => {
  for (let r = 0; r < tetromino.shape.length; r++) {
    for (let c = 0; c < tetromino.shape[r].length; c++) {
      if (tetromino.shape[r][c]) {
        const newY = position.row + r + 1;
        const newX = position.col + c;
        if (newY >= 20 || board[newY]?.[newX] !== 0) return true;
      }
    }
  }
  return false;
};

export const isGameOver = (board, tetromino, position) => {
  return tetromino.shape.some((row, rIdx) =>
    row.some((cell, cIdx) => {
      if (cell) {
        const y = position.row + rIdx;
        const x = position.col + cIdx;
        return y < 1 && board[y]?.[x] !== 0;
      }
      return false;
    })
  );
};
