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
                <span className={style.nav} style={{"fontWeight":"1000", "fontSize": "22px"}}>DESCRIPTION: </span>
                <span className={style.nav} >{character.Description}</span>
              </div>
              <div className={style.detail}>
                <span className={style.nav} style={{"fontWeight":"1000", "fontSize": "22px"}}>PLATFORMS: {" "}</span>
                {character.Platforms &&
                  character.Platforms.map((platform, index) => (
                    <span className={style.nav} key={platform}>
                      {platform}  
                      {index !== character.Platforms.length - 1 ? ", " : ""}
                    </span>
                  ))}
              </div>
              <div className={style.detail}>
                <span className={style.nav} style={{"fontWeight":"1000", "fontSize": "22px"}}>RELEASED DATE: </span>
                <span className={style.nav}>{character.Released_at}</span>
              </div>
              <div className={style.detail}>
                <span className={style.nav} style={{"fontWeight":"1000", "fontSize": "22px"}}>RATING: </span>
                <span className={style.nav}>{character.Rating}</span>
              </div>
              <div className={style.detail}>
                <span className={style.nav} style={{"fontWeight":"1000", "fontSize": "22px"}}>GENRES </span>{" "}
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
