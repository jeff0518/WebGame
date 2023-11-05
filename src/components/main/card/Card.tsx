import { NavLink } from "react-router-dom";

import style from "./Card.module.scss";

interface CardProps {
  color: string;
  card_image: string;
  title: string;
  description: string;
  gameId: string;
}

function Card({ color, card_image, gameId, description, title }: CardProps) {
  return (
    <div className={style.cardInbox}>
      <div
        className={`${style.cardInbox__side} ${style.cardInbox__side__front}`}
      >
        <div className={`${style.front__img} ${style[card_image]}`} />
        <div className={style.front__title}>{title}</div>
      </div>
      <div
        className={`${style.cardInbox__side} ${style.cardInbox__side__back} ${style[color]}`}
      >
        <div className={style.back__container}>
          <div className={style.description}>{description}</div>
          <NavLink to={`/games/${gameId}`}>
            <button className={style.card__button}>Play</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Card;
