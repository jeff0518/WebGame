import { useCallback, useState, useEffect } from "react";
import {
  defaultSnake,
  createFood,
  SPACE,
  ARROW_UP,
  ARROW_DOWN,
  ARROW_LEFT,
  ARROW_RIGHT,
  SNAKE_INITIAL_SPEED,
  formatPosition,
} from "./context/snakeContext";

import Information from "./information/Information";
import GameScreen from "./screen/GameScreen";
import Actions from "./actions/Actions";
import style from "./index.module.scss";

interface EventProps {
  code: string;
}

const directionMap: { [key: string]: { x: number; y: number } } = {
  [ARROW_UP]: { x: 0, y: -1 },
  [ARROW_DOWN]: { x: 0, y: 1 },
  [ARROW_LEFT]: { x: -1, y: 0 },
  [ARROW_RIGHT]: { x: 1, y: 0 },
};

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

  const changeDirectionHandler = (directionKey: string) => {
    const newDirection = {
      [ARROW_UP]: ARROW_UP,
      [ARROW_DOWN]: ARROW_DOWN,
      [ARROW_LEFT]: ARROW_LEFT,
      [ARROW_RIGHT]: ARROW_RIGHT,
    }[directionKey];

    if (newDirection) {
      setSnake((prevSnake) => ({
        ...prevSnake,
        direction: newDirection,
      }));
    }
  };

  const togglePauseHandler = () => {
    if (isGameStart) {
      setIsPause((prev) => !prev);
    }
  };

  const gameStartHandler = () => {
    setScore(0);
    setSnake(defaultSnake);
    setIsGameStart(true);
    if (gameOver) {
      setFood(createFood());
    }
  };

  const keydownHandler = useCallback(
    ({ code }: EventProps) => {
      if (code === SPACE) {
        togglePauseHandler();
        return;
      }
      changeDirectionHandler(code);
    },
    [snake]
  );

  useEffect(() => {
    const gameIntervalId = setInterval(() => {
      if (!isGameStart || isPause) return;
      setSnake((prevSnake) => {
        const updatedX = formatPosition(
          prevSnake.head.x + directionMap[prevSnake.direction].x
        );
        const updatedY = formatPosition(
          prevSnake.head.y + directionMap[prevSnake.direction].y
        );
        const newBodyList = [
          prevSnake.head,
          ...prevSnake.bodyList.slice(0, prevSnake.maxLength - 2),
        ];
        const newSnake = {
          ...prevSnake,
          head: { x: updatedX, y: updatedY },
          bodyList: newBodyList,
        };
        return newSnake;
      });
    }, snake.speed);
    return () => {
      clearInterval(gameIntervalId);
    };
  }, [snake.speed, isGameStart, isPause]);

  useEffect(() => {
    if (eatFood) {
      setFood(createFood());
      setScore((prevScore) => prevScore + 1);
      setSnake((prevSnake) => {
        const updatedSpeed = prevSnake.speed - SNAKE_INITIAL_SPEED;
        return {
          ...prevSnake,
          maxLength: prevSnake.maxLength + 1,
          speed: Math.max(updatedSpeed, SNAKE_INITIAL_SPEED),
        };
      });
    }
  }, [eatFood]);

  useEffect(() => {
    if (gameOver) {
      setIsGameStart(false);
    }
  }, [gameOver]);

  useEffect(() => {
    window.addEventListener("keydown", keydownHandler);
    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  }, [keydownHandler]);

  return (
    <div className={style.container}>
      <Information score={score} level={level} />
      <GameScreen
        snake={snake}
        food={food}
        isGameStart={isGameStart}
        gameOver={gameOver}
        gameStartHandler={gameStartHandler}
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
