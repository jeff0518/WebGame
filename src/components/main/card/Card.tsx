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
        <div className={style.back__container}>
          <div className={style.description}>
            描述遊戲玩法 70%。如果你想要用英文表达 "新增卡片前的格式"，可以使用
            "Formatting for Adding Ca
          </div>
          <button className={style.card__button}>button 的連結 30%</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
