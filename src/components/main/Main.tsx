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
            title="井字遊戲"
            description="最先以橫、直、斜連成一線則獲勝，如果棋盤被填滿則平手。"
            gameId="tictactoe"
          />
          <Card
            color="cardInbox__side__back__color2"
            card_image="front__img__2"
            title="貪食蛇"
            description="貪食蛇你懂的"
            gameId="snake"
          />
          <Card
            color="cardInbox__side__back__color3"
            card_image="front__img__3"
            title="翻牌遊戲"
            description="建構中"
            gameId="123"
          />
        </div>
      </div>
    </>
  );
}

export default Main;
