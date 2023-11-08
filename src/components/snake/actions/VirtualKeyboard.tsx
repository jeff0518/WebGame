import ArrowButton from "../context/ArrowButton";
import {
  ARROW_UP,
  ARROW_RIGHT,
  ARROW_DOWN,
  ARROW_LEFT,
} from "../context/snakeContext";
import style from "./VirtualKeyboard.module.scss";

interface VirtualKeyboardProps {
  changeDirectionHandler: (val: string) => void;
}

function VirtualKeyboard({ changeDirectionHandler }: VirtualKeyboardProps) {
  return (
    <div className={style.container}>
      <ArrowButton
        direction={ARROW_UP}
        onClick={() => {
          changeDirectionHandler(ARROW_UP);
        }}
      />
      <ArrowButton
        direction={ARROW_RIGHT}
        onClick={() => {
          changeDirectionHandler(ARROW_RIGHT);
        }}
      />
      <ArrowButton
        direction={ARROW_DOWN}
        onClick={() => {
          changeDirectionHandler(ARROW_DOWN);
        }}
      />
      <ArrowButton
        direction={ARROW_LEFT}
        onClick={() => {
          changeDirectionHandler(ARROW_LEFT);
        }}
      />
    </div>
  );
}

export default VirtualKeyboard;
