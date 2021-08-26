import React, { useState } from "react";
import Square from "./Square";
import { calculateWinner } from "../helper";

const Board = () => {
  const arr = Array(9).fill(null);
  const [square, setSquare] = useState(arr);
  const [X, setX] = useState(true);

  const winner = calculateWinner(square);
  let status;

  if (winner) {
    window.confirm(`Winner is: ${winner}`);
  } else {
    status = X ? "X" : "O";
  }

  const positionSquare = (i) => {
    return <Square value={square[i]} onClick={() => oneClick(i)} />;
  };

  const oneClick = (i) => {
    const singleSquare = square.slice();

    if (singleSquare[i] === null) {
      singleSquare[i] = X ? "X" : "O";
      setSquare(singleSquare);
      setX(!X);
    }
  };

  return (
    <div className="board">
      <div className="board-row">
        {positionSquare(0)}
        {positionSquare(1)}
        {positionSquare(2)}
      </div>

      <div className="board-row">
        {positionSquare(3)}
        {positionSquare(4)}
        {positionSquare(5)}
      </div>

      <div className="board-row">
        {positionSquare(6)}
        {positionSquare(7)}
        {positionSquare(8)}
      </div>

      {status}
    </div>
  );
};

export default Board;
