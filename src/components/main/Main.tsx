import style from "./Main.module.scss";

function Main() {
  return (
    <>
      <div className={style.main_container}>
        <div className={style.main_container_section}>
          <div className={style.section_card}>卡片1</div>
          <div className={style.section_card}>卡片2</div>
          <div className={style.section_card}>卡片3</div>
        </div>
      </div>
    </>
  );
}

export default Main;
