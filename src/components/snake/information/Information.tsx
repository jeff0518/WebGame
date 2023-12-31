import style from "./Information.module.scss";

interface InformationProps {
  score: number;
  level: number;
}

function Information({ score, level }: InformationProps) {
  return (
    <div className={style.information}>
      <p>分數： {score}</p>
      <p>等級： {level >= 20 ? "MAX" : level}</p>
    </div>
  );
}

export default Information;
