import Square from "./Square";
import style from "./Board.module.scss";

import { PlayerType } from "./index";

interface BoardProps {
  winner: PlayerType;
  setSquareValue: (index: number) => void;
  squares: PlayerType[];
  setWinner: (winner: PlayerType) => void;
}

function Board(props: BoardProps) {
  const { winner, squares, setSquareValue } = props;
  return (
    <>
      <div className={style.grid}>
        {Array(9)
          .fill(null)
          .map((_, i) => {
            return (
              <Square
                key={i}
                winner={winner}
                onClick={() => setSquareValue(i)}
                value={squares[i]}
              />
            );
          })}
      </div>
    </>
  );
}

export default Board;
