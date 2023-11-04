import style from "./Card.module.scss";

interface CardProps {
  color: string;
  card_image: string;
}

function Card({ color, card_image }: CardProps) {
  return (
    <div className={style.cardInbox}>
      <div
        className={`${style.cardInbox__side} ${style.cardInbox__side__front}`}
      >
        <div className={`${style.front__img} ${style[card_image]}`} />
        <div className={style.front__title}>title 30%</div>
      </div>
      <div
        className={`${style.cardInbox__side} ${style.cardInbox__side__back} ${style[color]}`}
      >
        <div>描述遊戲玩法 70%</div>
        <div>button 的連結 30%</div>
      </div>
    </div>
  );
}

export default Card;
