import ArrowButton from "../context/ArrowButton";
import {
  ARROW_UP,
  ARROW_RIGHT,
  ARROW_DOWN,
  ARROW_LEFT,
} from "../context/snakeContext";
import style from "./VirtualKeyboard.module.scss";

interface VirtualKeyboardProps {
  changeDirectionHandler: () => void;
}

function VirtualKeyboard({ changeDirectionHandler }: VirtualKeyboardProps) {
  return (
    <div className={style.container}>
      <ArrowButton
        direction={ARROW_UP}
        onClick={() => {
          changeDirectionHandler();
        }}
      />
      <ArrowButton
        direction={ARROW_RIGHT}
        onClick={() => {
          changeDirectionHandler();
        }}
      />
      <ArrowButton
        direction={ARROW_DOWN}
        onClick={() => {
          changeDirectionHandler();
        }}
      />
      <ArrowButton
        direction={ARROW_LEFT}
        onClick={() => {
          changeDirectionHandler();
        }}
      />
    </div>
  );
}

export default VirtualKeyboard;
