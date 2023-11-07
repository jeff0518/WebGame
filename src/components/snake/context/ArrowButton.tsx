import { ARROW_UP, ARROW_RIGHT, ARROW_DOWN, ARROW_LEFT } from "./snakeContext";
import ArrowImage from "../../../assets/image/triangle.png";
import style from "./ArrowButton.module.scss";

interface ArrowButtonProps {
  direction: string;
}

function ArrowButton({ direction }: ArrowButtonProps) {
  let directionStyle = "";
  if (direction === ARROW_UP) {
    directionStyle = style.arrowUp;
  } else if (direction === ARROW_RIGHT) {
    directionStyle = style.arrowRight;
  } else if (direction === ARROW_DOWN) {
    directionStyle = style.arrowDown;
  } else if (direction === ARROW_LEFT) {
    directionStyle = style.arrowLeft;
  }
  return (
    <button className={`${style.button} ${directionStyle}`}>
      <img src={ArrowImage} alt="虛擬鍵盤圖片" className={style.imgStyle} />
    </button>
  );
}

export default ArrowButton;
