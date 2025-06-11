import React from "react";
import TetrisBoard from "./TetrisBoard";
import Sidebar from "./Sidebar";
import useTetrisLogic from "../Hooks/useTetrisLogic";

function Grid() {
  const {
    displayBoard,
    score,
    gameOver,
    gameStarted,
    handleStart,
    handleReset,
  } = useTetrisLogic();

  return (
    <div className="container my-4">
      <h1
        className="text-center mb-4"
        style={{
          color: "#0dcaf0",
          fontWeight: "bold",
          textShadow: "0 0 10px rgba(13,202,240,0.8)",
          fontSize: "3rem",
        }}
      >
        Tetris
      </h1>

      <div className="row justify-content-center gx-1">
        <div className="col-md-7">
          <TetrisBoard displayBoard={displayBoard} />
        </div>

        <div className="col-md-3">
          <Sidebar
            score={score}
            gameOver={gameOver}
            gameStarted={gameStarted}
            handleStart={handleStart}
            handleReset={handleReset}
          />
        </div>
      </div>
    </div>
  );
}

export default Grid;
