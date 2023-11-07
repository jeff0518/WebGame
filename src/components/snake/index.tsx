import { useState } from "react";

import Information from "./information/Information";
import style from "./index.module.scss";

function SnakeGame() {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  return (
    <div className={style.container}>
      <Information score={score} level={level} />
      <div>遊戲主畫面</div>
      <div>控制面板</div>
    </div>
  );
}

export default SnakeGame;
