import { useState, useEffect } from "react";
import { usePlayer } from "./player";
import { createEmptyBoard, mergeToBoard, getDisplayBoard } from "./useBoard";
import { hasCollision, isGameOver } from "./useCollision";
import useInput from "./useInput";

function useTetrisLogic() {
  const [board, setBoard] = useState(createEmptyBoard());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const {
    tetromino,
    position,
    moveDown,
    moveLeft,
    moveRight,
    moveFastDown,
    resetPlayer,
  } = usePlayer();

  useInput({
    gameStarted,
    gameOver,
    position,
    tetromino,
    board,
    moveLeft,
    moveRight,
    moveFastDown,
  });

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const interval = setInterval(() => {
      if (hasCollision(board, tetromino, position)) {
        if (isGameOver(board, tetromino, position)) {
          setGameOver(true);
        } else {
          const merged = mergeToBoard(board, tetromino, position);
          setBoard(merged);
          setScore((prev) => prev + 10);
          resetPlayer();
        }
      } else {
        moveDown();
      }
    }, 300);

    return () => clearInterval(interval);
  }, [position, gameStarted, gameOver]);

  const handleStart = () => {
    setBoard(createEmptyBoard());
    setScore(0);
    setGameOver(false);
    setGameStarted(true);
    resetPlayer();
  };

  const handleReset = () => {
    setBoard(createEmptyBoard());
    setScore(0);
    setGameOver(false);
    setGameStarted(false);
    resetPlayer();
  };

  return {
    board,
    displayBoard: getDisplayBoard(board, tetromino, position),
    score,
    gameOver,
    gameStarted,
    handleStart,
    handleReset,
  };
}

export default useTetrisLogic;
