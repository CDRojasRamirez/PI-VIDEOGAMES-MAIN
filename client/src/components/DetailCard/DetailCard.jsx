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
          <div className={style.name}>{character.Name}</div>

          <div className={style.container}>
            <div>
              <img
                src={character.Image}
                alt={character.Name}
                className={style.img}
              />
            </div>
            <div className={style.containDetail}>
              <div className={style.detail}>
                Platforms:{" "}
                {character.Platforms &&
                  character.Platforms.map((platform, index) => (
                    <span key={platform}>
                      {platform}
                      {index !== character.Platforms.length - 1 ? ", " : ""}
                    </span>
                  ))}
              </div>
              <div className={style.detail}>
                Description: {character.Description}
              </div>
              <div className={style.detail}>
                Released_at: {character.Released_at}
              </div>
              <div className={style.detail}>Rating: {character.Rating}</div>
              <div className={style.detail}>
                <nav className={style.nav}>Genres: </nav>{" "}
                {character.VideogameGenre &&
                  character.VideogameGenre.map((genre, index) => (
                    <span key={genre}>
                      {genre}
                      {index !== character.VideogameGenre.length - 1
                        ? ", "
                        : ""}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailCard;
