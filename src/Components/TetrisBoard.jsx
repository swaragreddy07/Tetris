import React from "react";

function TetrisBoard({ displayBoard }) {
  return (
    <div
      className="card shadow bg-dark border-0"
      style={{ maxWidth: "fit-content" }}
    >
      <div className="card-body p-2">
        {displayBoard.map((row, rowIndex) => (
          <div className="row gx-0" key={rowIndex}>
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className="col-1 d-flex justify-content-center align-items-center"
                style={{
                  height: "30px",
                  width: "30px",
                  backgroundColor: cell === 0 ? "#222" : cell,
                  border: "1px solid #333",
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TetrisBoard;
