import { useState } from "react";
import { defaultSnake, createFood } from "./context/snakeContext";

import Information from "./information/Information";
import GameScreen from "./screen/GameScreen";
import Actions from "./actions/Actions";
import style from "./index.module.scss";

function SnakeGame() {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [isPause, setIsPause] = useState(false);
  const [isGameStart, setIsGameStart] = useState(false);
  const [snake, setSnake] = useState(defaultSnake);
  const [food, setFood] = useState(() => createFood());

  const eatFood = snake.head.x === food.x && snake.head.y === food.y;
  const gameOver: { x: number; y: number } | undefined = snake.bodyList.find(
    (item) => item.x === snake.head.x && item.y === snake.head.y
  );

  const changeDirectionHandler = () => {};
  const togglePauseHandler = () => {};
  return (
    <div className={style.container}>
      <Information score={score} level={level} />
      <GameScreen
        snake={snake}
        food={food}
        isGameStart={isGameStart}
        gameOver={gameOver}
      />
      <Actions
        isPause={isPause}
        changeDirectionHandler={changeDirectionHandler}
        togglePauseHandler={togglePauseHandler}
      />
    </div>
  );
}

export default SnakeGame;
