import style from "./Card.module.scss";

interface CardProps {
  color: string;
}

function Card({ color }: CardProps) {
  return (
    <div className={style.cardInbox}>
      <div
        className={`${style.cardInbox__side} ${style.cardInbox__side__front}`}
      >
        卡片Front
      </div>
      <div
        className={`${style.cardInbox__side} ${style.cardInbox__side__back} ${style[color]}`}
      >
        卡片Back
      </div>
    </div>
  );
}

export default Card;
