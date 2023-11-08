import PauseButton from "./PauseButton";
import VirtualKeyboard from "./VirtualKeyboard";
import style from "./Actions.module.scss";

interface ActionsProps {
  isPause: boolean;
  changeDirectionHandler: (val: string) => void;
  togglePauseHandler: () => void;
}

function Actions({
  isPause,
  changeDirectionHandler,
  togglePauseHandler,
}: ActionsProps) {
  return (
    <div className={style.container}>
      <VirtualKeyboard changeDirectionHandler={changeDirectionHandler} />
      <PauseButton isPause={isPause} togglePauseHandler={togglePauseHandler} />
    </div>
  );
}

export default Actions;
