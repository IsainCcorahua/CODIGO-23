import style from "./Card.module.scss";

export const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.photo}>
        <picture className={style.picture}>
          <img src="./google.png" className={style.image} alt="jobs image"/>
        </picture>
      </div>
      <div className={style.detail}>
        <h2>Card Title</h2>
        <ul className={style.extra}>
          <li className={style.extra_item}>Google</li>
          <li className={style.extra_item}>Full Time</li>
          <li className={style.extra_item}>50-100 employees</li>
          <li className={style.extra_item}>180-200k USD</li>
        </ul>
        <div className={style.country}>
          <button className={style.button}>
            <img
              src="./australia.png"
              alt="country image"
              className={style.icon}
            /> {" "}
            Australia
          </button>
        </div>
      </div>
    </div>
  );
};
