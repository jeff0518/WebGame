import style from "./PauseButton.module.scss";

interface PauseButtonProps {
  isPause: boolean;
  togglePauseHandler: () => void;
}

function PauseButton({ isPause, togglePauseHandler }: PauseButtonProps) {
  return (
    <button className={style.button} onClick={togglePauseHandler}>
      {isPause ? "繼續" : "暫停"}
    </button>
  );
}

export default PauseButton;
