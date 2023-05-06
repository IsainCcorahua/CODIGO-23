import style from "./Search.module.scss";

export const Search = () => {
    const [search, setSearch] = useState("");

    const handleInputChange = (event) => {};
    return (
    <div className={style.search}>
        <picture className={style.picture}>
            <img src="./search.png" alt="search" className={style.icon}/>
        </picture>       
        <input type="text" onChange={handleInputChange}/>
    </div>
  )
}
