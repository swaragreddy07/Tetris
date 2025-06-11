import { useEffect } from "react";

export default function useInput({
  gameStarted,
  gameOver,
  position,
  tetromino,
  board,
  moveLeft,
  moveRight,
  moveFastDown,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!gameStarted || gameOver) return;

      if (e.key === "ArrowLeft" && position.col > 0) {
        moveLeft();
      } else if (e.key === "ArrowRight") {
        const rightEdge = tetromino.shape[0].length;
        if (position.col + rightEdge < 10) moveRight();
      } else if (e.key === "ArrowDown") {
        const willCollide = tetromino.shape.some((row, rIdx) =>
          row.some((cell, cIdx) => {
            if (cell) {
              const y = position.row + rIdx + 1;
              const x = position.col + cIdx;
              return y >= 20 || board[y]?.[x] !== 0;
            }
            return false;
          })
        );
        if (!willCollide) moveFastDown();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameStarted, gameOver, position, tetromino]);
}
