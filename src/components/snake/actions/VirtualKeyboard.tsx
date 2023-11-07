import ArrowButton from "../context/ArrowButton";
import {
  ARROW_UP,
  ARROW_RIGHT,
  ARROW_DOWN,
  ARROW_LEFT,
} from "../context/snakeContext";
import style from "./VirtualKeyboard.module.scss";

function VirtualKeyboard() {
  return <div className={style.container}></div>;
}

export default VirtualKeyboard;
