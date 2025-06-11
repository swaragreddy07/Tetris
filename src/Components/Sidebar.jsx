import React from "react";

function Sidebar({ score, gameOver, gameStarted, handleStart, handleReset }) {
  return (
    <>
      <div className="card text-white bg-secondary mb-3">
        <div className="card-header">Score</div>
        <div className="card-body">
          <h5 className="card-title">{score}</h5>
        </div>
      </div>

      {gameOver && (
        <div className="card text-white bg-danger mb-3">
          <div className="card-body">
            <h5 className="card-title">Game Over</h5>
            <p className="card-text">You filled the board!</p>
          </div>
        </div>
      )}

      <div className="d-grid gap-2 mb-3">
        <button
          className="btn btn-success btn-lg"
          onClick={handleStart}
          disabled={gameStarted && !gameOver}
        >
          Start Game
        </button>
        <button className="btn btn-outline-light btn-lg" onClick={handleReset}>
          Reset Game
        </button>
      </div>

      <div className="card text-white bg-secondary mb-3 mt-3">
        <div className="card-header">🎮 Controls</div>
        <div className="card-body">
          <ul className="list-unstyled mb-0">
            <li>
              <strong>⬆️ Up Arrow</strong> – (Coming soon) Rotate block
            </li>
            <li>
              <strong>⬇️ Down Arrow</strong> – Move block down faster
            </li>
            <li>
              <strong>⬅️ Left Arrow</strong> – Move block left
            </li>
            <li>
              <strong>➡️ Right Arrow</strong> – Move block right
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
