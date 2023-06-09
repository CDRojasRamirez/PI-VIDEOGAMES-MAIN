import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFavorites, deleteFavorites } from "../../redux/action";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Card = ({ ID, Image, Name, VideogameGenre }) => {
  const [ fav, setFav ] = useState({ fav: false })
  const dispatch = useDispatch()
  const { myFavorites } = useSelector(state => state)

  useEffect(() => {

    myFavorites.forEach(e => {
      if(e.ID === ID){
        return setFav({ fav: true})
      } 
    })

  }, [myFavorites])

  const handleFav = () => {
    if(fav.fav){
      setFav({ fav: false})
      dispatch(deleteFavorites(ID))
    }
    else{
      setFav({ fav: true})
      dispatch(addFavorites(ID))
    }
  }
  return (
    <>

    
        <li className={style.videogameCard}>
        {
        fav.fav ? <span onClick={handleFav} className={style.fav} >❤️</span> :
        <span onClick={handleFav} className={style.fav} >🤍</span>
        }
        <Link to={`/detail/${ID}`} className={style.Link}>
          <img
            className={style.imagen}
            src={Image}
            alt={Name}
            width={260}
            height={160}
          />
          <div className={style.name}>{Name}</div>
          <div className={style.containGenres}> 
            <span className={style.nav}>Genres: </span>{" "}
            {VideogameGenre &&
              VideogameGenre?.map((genre, index) => (
                <span className={style.span} key={genre}>
                  {genre}
                  {index !== VideogameGenre.length - 1 ? ", " : ""}{" "}
                </span>
              ))}
              
          </div>
          </Link>
        </li>
      
    </>
  );
};

export default Card;
