import ArrowButton from "../context/ArrowButton";
import {
  ARROW_UP,
  ARROW_RIGHT,
  ARROW_DOWN,
  ARROW_LEFT,
} from "../context/snakeContext";
import style from "./VirtualKeyboard.module.scss";

function VirtualKeyboard() {
  return (
    <div className={style.container}>
      <ArrowButton direction={ARROW_UP} onClick={() => {}} />
      <ArrowButton direction={ARROW_RIGHT} onClick={() => {}} />
      <ArrowButton direction={ARROW_DOWN} onClick={() => {}} />
      <ArrowButton direction={ARROW_LEFT} onClick={() => {}} />
    </div>
  );
}

export default VirtualKeyboard;
