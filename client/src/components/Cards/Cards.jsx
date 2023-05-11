import Card from "../Card/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import style from "./Cards.module.css";
import { Link } from "react-router-dom";
import Loader from "../../utils/Loader/Loader";
import Select from "../../utils/Select/Select";


const Cards = () => {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);

      try {
        axios("http://localhost:3001/videogames").then((res) =>
          setCharacter(res.data)
        );
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 300);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div> 
          {/**componente para filtrar seleccion */}
          <Select />

          <ul className={style.cardsGrid}>
            {character &&
              character.map((char) => {
                return (
                  <>
                    <Card
                      key={char?.ID}
                      ID={char?.ID}
                      Image={char?.Image}
                      Name={char?.Name}
                      VideogameGenre={char?.VideogameGenre}
                    />
                  </>
                );
              })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Cards;
