import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ ID, Image, Name, VideogameGenre }) => {

  return (
    <>
      <Link to={`/detail/${ID}`} className={style.Link}>
        {console.log(ID)}
        <li className={style.videogameCard}>
          <img
            className={style.imagen}
            src={Image}
            alt={Name}
            width={260}
            height={160}
          />
          <div className={style.name}>{Name}</div>
          <div>
            <nav className={style.nav}>Genres: </nav>{" "}
            {VideogameGenre &&
              VideogameGenre?.map((genre, index) => (
                <span key={genre}>
                  {genre}
                  {index !== VideogameGenre.length - 1 ? ", " : ""}{" "}
                </span>
              ))}
          </div>
        </li>
      </Link>
    </>
  );
};

export default Card;
