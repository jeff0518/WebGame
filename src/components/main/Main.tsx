import Card from "./card/Card";
import style from "./Main.module.scss";

function Main() {
  return (
    <>
      <div className={style.main_container}>
        <div className={style.main_container_section}>
          <Card
            color="cardInbox__side__back__color1"
            card_image="front__img__1"
            gameId="tictactoe"
          />
          <Card
            color="cardInbox__side__back__color2"
            card_image="front__img__2"
            gameId="snake"
          />
          <Card
            color="cardInbox__side__back__color3"
            card_image="front__img__3"
            gameId="123"
          />
        </div>
      </div>
    </>
  );
}

export default Main;
