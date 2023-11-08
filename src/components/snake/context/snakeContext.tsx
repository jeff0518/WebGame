export const ARROW_UP = "ArrowUp";
export const ARROW_DOWN = "ArrowDown";
export const ARROW_LEFT = "ArrowLeft";
export const ARROW_RIGHT = "ArrowRight";
export const SPACE = "Space";
export const GRID_SIZE = 30;
export const SNAKE_INITIAL_SPEED = 200;

export const defaultSnake = {
  head: { x: 2, y: 0 },
  bodyList: [
    { x: 1, y: 0 },
    { x: 0, y: 0 },
  ],
  maxLength: 3,
  direction: ARROW_RIGHT,
  speed: SNAKE_INITIAL_SPEED,
};

export const createFood = () => ({
  x: Math.floor(Math.random() * GRID_SIZE),
  y: Math.floor(Math.random() * GRID_SIZE),
});

export const directionMap: { [key: string]: { x: number; y: number } } = {
  [ARROW_UP]: { x: 0, y: -1 },
  [ARROW_DOWN]: { x: 0, y: 1 },
  [ARROW_LEFT]: { x: -1, y: 0 },
  [ARROW_RIGHT]: { x: 1, y: 0 },
};

export const formatPosition = (position: number) => {
  console.log("formatPosition 有進來");
  console.log(position);
  if (position > GRID_SIZE - 1) {
    return 0;
  }

  if (position < 0) {
    return GRID_SIZE - 1;
  }

  return position;
};
