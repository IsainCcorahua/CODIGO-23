import style from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
        <span className={style.develeper}>DEVELOPER</span>
        <h1 className={style.title}>Top Web Develepers Jobs</h1>
        <p className={style.description}>Find your dream job </p>
    </header>
  )
}
