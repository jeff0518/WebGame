import { PlayerType } from "./index";
import style from "./Square.module.scss";

interface SquareProps {
  value: PlayerType;
  winner: PlayerType;
  onClick: () => void;
}

function Square(props: SquareProps) {
  const { value, winner, onClick } = props;
  let valueStyle = "square_" + value?.toLocaleLowerCase();

  if (!value) {
    return (
      <button
        className={style.square}
        onClick={onClick}
        disabled={Boolean(winner)}
      />
    );
  }
  return (
    <>
      <button className={`${style.square} ${style[valueStyle]}`} disabled>
        {value}
      </button>
    </>
  );
}

export default Square;
