import Card from "./card/Card";
import style from "./Main.module.scss";

function Main() {
  return (
    <>
      <div className={style.main_container}>
        <div className={style.main_container_section}>
          <Card color="cardInbox__side__back__color1" />
          <Card color="cardInbox__side__back__color2" />
          <Card color="cardInbox__side__back__color3" />
        </div>
      </div>
    </>
  );
}

export default Main;
