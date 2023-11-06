import { useEffect, useState } from "react";
import { calculateWinnerHandler } from "../../utils/calculateWinnerHandler";

import Board from "./Board";
import style from "./index.module.scss";
export type PlayerType = "X" | "O" | "BOTH" | null;

function TicTacTop() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random()) === 1 ? "X" : "O"
  );
  const [winner, setWinner] = useState<PlayerType>(null);

  const setSquareValue = (index: number) => {
    const newData = squares.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      }
      return val;
    });
    setSquares(newData);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const resetHandler = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(Math.round(Math.random()) === 1 ? "X" : "O");
  };

  useEffect(() => {
    const win = calculateWinnerHandler(squares);
    if (win) {
      setWinner(win);
    }

    //當沒有空格時還未出現贏家，跳出平手！！！
    if (!win && !squares.filter((square) => !square).length) {
      setWinner("BOTH");
    }
  }, [squares]);

  return (
    <div className={style.container}>
      {!winner && <p>Hey {currentPlayer} 輪到你了</p>}
      {winner && winner !== "BOTH" && <p>恭喜 {winner} 是贏家</p>}
      {winner && winner === "BOTH" && <p>平手</p>}
      <Board
        setSquareValue={setSquareValue}
        squares={squares}
        winner={winner}
        setWinner={setWinner}
      />
      <button className={style.reset} onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
}

export default TicTacTop;
