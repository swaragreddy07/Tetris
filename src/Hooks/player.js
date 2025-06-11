// src/hooks/usePlayer.js
import { useState } from "react";
import { randomTetromino } from "../utils/tetrominoes";

export const usePlayer = () => {
  const [tetromino, setTetromino] = useState(randomTetromino());
  const [position, setPosition] = useState({ row: 0, col: 3 });

  const resetPlayer = () => {
    setTetromino(randomTetromino());
    setPosition({ row: 0, col: 3 });
  };

  const moveDown = () => {
    setPosition((prev) => ({ ...prev, row: prev.row + 1 }));
  };

  const moveLeft = () => {
    setPosition((prev) => ({ ...prev, col: prev.col - 1 }));
  };

  const moveRight = () => {
    setPosition((prev) => ({ ...prev, col: prev.col + 1 }));
  };

  const moveFastDown = () => {
    setPosition((prev) => ({ ...prev, row: prev.row + 1 }));
  };

  return {
    tetromino,
    position,
    moveDown,
    moveLeft,
    moveRight,
    moveFastDown,
    resetPlayer,
    setPosition,
  };
};
