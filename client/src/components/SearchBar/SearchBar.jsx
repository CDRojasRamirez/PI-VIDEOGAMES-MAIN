import { Link } from "react-router-dom"
import style from "./SearchBar.module.css"

const SearchBar = () => {

    return (
        <div className={style.containerSearchBar}>
            <button style={
                    {
                        "top":"9.5px",
                        "right":"1205px",
                        "width":"300px",
                        "fontSize":"16px",
                        "padding":"20px",
                        "background":"none"
                        // "background":"rgb(14, 1, 31)",
                        
                    }}
                    >Daniel's Arcade</button>
                <Link to={'/creategame'} className={style.btn}>
                    <button style={
                    {
                        "top":"9.5px",
                        "right":"43px",
                        "width":"220px",
                        "fontSize":"16px",
                        "padding":"20px",
                        "background":"none"
                        // "background":"rgb(14, 1, 31)",
                        
                    }}
                    >Create Game</button>
                    </Link>
                {/* <input type="text" className={style.input} placeholder='  Buscar un videojuego' /> */}
                
                    <input type="text" name="text" className={style.input} placeholder="Buscar un videojuego...."></input>
            </div>
    )
}

export default SearchBar;