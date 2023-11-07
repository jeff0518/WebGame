import PauseButton from "./PauseButton";
import VirtualKeyboard from "./VirtualKeyboard";
import style from "./Actions.module.scss";

interface ActionsProps {
  isPause: boolean;
}

function Actions({ isPause }: ActionsProps) {
  return (
    <div className={style.container}>
      <VirtualKeyboard />
      <PauseButton isPause={isPause} />
    </div>
  );
}

export default Actions;
