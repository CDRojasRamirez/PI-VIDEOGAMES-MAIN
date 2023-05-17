import { useSelector } from "react-redux";
import style from './Favorites.module.css'
import CardFavorite from "../CardFavorite/CardFavorite";
import SelectFavorite from "../../utils/SelectFavorite/SelectFavorite";

const Favorites = () => {

    const { myFavorites } = useSelector(state => state)

    return (
        <div className={style.containTotal}> 
          {/**componente para filtrar seleccion */}
          <SelectFavorite />
          <ul className={style.cardsGrid}>
            {
           
              myFavorites.map((char) => {
                return (
                  <>
                    <CardFavorite
                      key={char?.ID}
                      ID={char?.ID}
                      Image={char?.Image}
                      Name={char?.Name}
                      VideogameGenre={char?.VideogameGenre}
                    />
                  </>
                );
              })
              }
          </ul>
          
        </div>
    )
}

export default Favorites;