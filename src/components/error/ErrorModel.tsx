import style from "./ErrorModel.module.scss";

function ErrorModel() {
  return (
    <div className={style.container}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}

export default ErrorModel;
