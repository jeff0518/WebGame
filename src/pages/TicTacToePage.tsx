import TicTacTop from "../components/tictactop";
import style from "../styles/TicTacToe.module.scss";

function TicTacToePage() {
  return (
    <div className={style.container}>
      <TicTacTop />
    </div>
  );
}

export default TicTacToePage;
