// src/utils/tetrominoes.js
export const TETROMINOES = {
  I: {
    shape: [[1, 1, 1, 1]],
    color: "#0dcaf0",
  },
  O: {
    shape: [
      [1, 1],
      [1, 1],
    ],
    color: "#ffc107",
  },
  T: {
    shape: [
      [0, 1, 0],
      [1, 1, 1],
    ],
    color: "#6f42c1",
  },
};

export const randomTetromino = () => {
  const keys = Object.keys(TETROMINOES);
  const rand = keys[Math.floor(Math.random() * keys.length)];
  return TETROMINOES[rand];
};
