import PauseButton from "./PauseButton";
import style from "./Actions.module.scss";

interface ActionsProps {
  isPause: boolean;
}

function Actions({ isPause }: ActionsProps) {
  return (
    <div className={style.container}>
      <div>螢幕上的鍵盤</div>
      <PauseButton isPause={isPause} />
    </div>
  );
}

export default Actions;
