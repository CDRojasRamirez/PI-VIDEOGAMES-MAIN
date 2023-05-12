import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./DetailCard.module.css";
import Loader from "../../utils/Loader/Loader";

const DetailCard = () => {
  const [character, setCharacter] = useState([]);
  const [isMounted, setIsMounted] = useState(true);
  const [loading, setLoading] = useState(true);
  const { IDgame } = useParams();

  useEffect(() => {
    setTimeout(() => {
      try {
        fetch(`http://localhost:3001/videogames/${IDgame}`)
          .then((res) => res.json())
          .then((data) => {
            if (isMounted) {
              console.log(data);
              setCharacter(data);
            }
          })
          .catch((error) => {
            console.log(error);
          });
        return () => {
          setIsMounted(false);
        };
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }, 300)
  }, [IDgame, isMounted]);

  // if (!character || Object.keys(character).length === 0) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={style.bodyT}>
          <div className={style.name}>
            <span className={style.span}>{character.Name}</span>
          </div>
            <div className={style.divImg}>
              <img
                src={character.Image}
                alt={character.Name}
                className={style.img}
              />
            </div>
              <div className={style.detail}>
                <nav className={style.nav} style={{"fontWeight":"1000"}}>Description:</nav>
                <nav className={style.nav} >{character.Description}</nav>
              </div>
              <div className={style.detail}>
                <nav className={style.nav} style={{"fontWeight":"1000"}}>Platforms:{" "}</nav>
                {character.Platforms &&
                  character.Platforms.map((platform, index) => (
                    <span className={style.nav} key={platform}>
                      {platform}
                      {index !== character.Platforms.length - 1 ? ", " : ""}
                    </span>
                  ))}
              </div>
              <div className={style.detail}>
                <nav className={style.nav} style={{"fontWeight":"1000"}}>Released Date:</nav>
                <nav className={style.nav}>{character.Released_at}</nav>
              </div>
              <div className={style.detail}>
                <nav className={style.nav} style={{"fontWeight":"1000"}}>Rating: </nav>
                <nav className={style.nav}>{character.Rating}</nav>
              </div>
              <div className={style.detail}>
                <nav className={style.nav} style={{"fontWeight":"1000"}}>Genres: </nav>{" "}
                {character.VideogameGenre &&
                  character.VideogameGenre.map((genre, index) => (
                    <span key={genre} className={style.nav}>
                      {genre}
                      {index !== character.VideogameGenre.length - 1
                        ? ", "
                        : ""}
                    </span>
                  ))}
              </div>

          </div>
  
      )}
    </>
  );
};

export default DetailCard;
