import { NavLink } from "react-router-dom";

import style from "./Layout.module.scss";

function Layout() {
  return (
    <div className={style.title_container}>
      <NavLink to={"/"}>
        <h1 className={style.loge}>Web Game</h1>
      </NavLink>
    </div>
  );
}

export default Layout;
