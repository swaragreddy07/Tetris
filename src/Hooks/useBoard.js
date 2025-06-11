export const createEmptyBoard = (rows = 20, cols = 10) =>
  Array.from({ length: rows }, () => Array(cols).fill(0));

export const mergeToBoard = (board, tetromino, position) => {
  const newBoard = board.map((row) => [...row]);

  tetromino.shape.forEach((row, rIdx) => {
    row.forEach((cell, cIdx) => {
      if (cell) {
        const y = position.row + rIdx;
        const x = position.col + cIdx;
        if (y >= 0 && y < 20 && x >= 0 && x < 10) {
          newBoard[y][x] = tetromino.color;
        }
      }
    });
  });

  return newBoard;
};

export const getDisplayBoard = (board, tetromino, position) => {
  const tempBoard = board.map((row) => [...row]);

  tetromino.shape.forEach((row, rIdx) => {
    row.forEach((cell, cIdx) => {
      if (cell) {
        const y = position.row + rIdx;
        const x = position.col + cIdx;
        if (y >= 0 && y < 20 && x >= 0 && x < 10) {
          tempBoard[y][x] = tetromino.color;
        }
      }
    });
  });

  return tempBoard;
};
