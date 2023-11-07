import { useState } from "react";

import Information from "./information/Information";
import Actions from "./actions/actions";
import style from "./index.module.scss";

function SnakeGame() {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [isPause, setIsPause] = useState(false);
  return (
    <div className={style.container}>
      <Information score={score} level={level} />
      <div>遊戲主畫面</div>
      <Actions isPause={isPause} />
    </div>
  );
}

export default SnakeGame;
