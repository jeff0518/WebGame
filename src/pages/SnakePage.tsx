import SnakeGame from "../components/snake";
import style from "../styles/Snake.module.scss";

function SnakePage() {
  return (
    <div className={style.container}>
      <SnakeGame />
    </div>
  );
}

export default SnakePage;
