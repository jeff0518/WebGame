import style from "./PauseButton.module.scss";

interface PauseButtonProps {
  isPause: boolean;
}

function PauseButton({ isPause }: PauseButtonProps) {
  return <button className={style.button}>{isPause ? "繼續" : "暫停"}</button>;
}

export default PauseButton;
