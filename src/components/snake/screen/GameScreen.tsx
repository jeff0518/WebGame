import { GRID_SIZE } from "../context/snakeContext";

import style from "./GameScreen.module.scss";

interface GameScreenProps {
  snake: {
    head: { x: number; y: number };
    bodyList: { x: number; y: number }[];
    maxLength: number;
    direction: string;
    speed: number;
  };
  food: { x: number; y: number };
  isGameStart: boolean;
  gameOver: { x: number; y: number } | undefined;
  gameStartHandler: () => void;
}

function GameScreen(props: GameScreenProps) {
  const { snake, food, isGameStart, gameOver, gameStartHandler } = props;

  const { head, bodyList } = snake;
  const squares = Array(GRID_SIZE)
    .fill(0)
    .map((_, index) => index);
  return (
    <div className={style.gameScreen_container}>
      <div className={style.map}>
        {squares.map((row) =>
          squares.map((column) => {
            const isSnake = [head, ...bodyList].find(
              (item) => item.x === column && item.y === row
            );
            const isFood = food.x === column && food.y === row;
            return (
              <div
                className={isSnake ? style.square : style.square2}
                key={`${row}_${column}`}
                data-x={column}
                data-y={row}
                data-issnake={isSnake ? "true" : "false"}
                data-isfood={isFood ? "true" : "false"}
              >
                {isFood && <div className={style.food} />}
              </div>
            );
          })
        )}
      </div>
      {!isGameStart && (
        <div className={style.popupScreen}>
          {gameOver && <div className={style.gameOver}>Game Over</div>}
          <button className={style.button} onClick={gameStartHandler}>
            {gameOver ? "重新開始" : "開始遊戲"}
          </button>
        </div>
      )}
    </div>
  );
}

export default GameScreen;
