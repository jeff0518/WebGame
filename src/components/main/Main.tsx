import style from "./Main.module.scss";

function Main() {
  return (
    <>
      <div className={style.main_container}>
        <div className={style.main_container_section}>
          <div className={style.cardInbox}>
            <div
              className={`${style.cardInbox__side} ${style.cardInbox__side__front}`}
            >
              卡片Front
            </div>
            <div
              className={`${style.cardInbox__side} ${style.cardInbox__side__back}`}
            >
              卡片Back
            </div>
          </div>
          <div className={style.cardInbox}>卡片2</div>
          <div className={style.cardInbox}>卡片3</div>
        </div>
      </div>
    </>
  );
}

export default Main;
