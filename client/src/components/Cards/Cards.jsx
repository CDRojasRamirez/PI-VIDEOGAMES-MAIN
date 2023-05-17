import Card from "../Card/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import style from "./Cards.module.css";
import { Link } from "react-router-dom";
import Loader from "../../utils/Loader/Loader";
import Select from "../../utils/Select/Select";
import { useDispatch, useSelector } from "react-redux";
import { getAllGames } from "../../redux/action";



const Cards = ({character, loading}) => {



  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllGames(character));
  }, [dispatch, character]);


  const { charactersGlobal, filteredCharacters } = useSelector( state => state)



  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={style.containTotal}> 
          {/**componente para filtrar seleccion */}
          <Select />

          <ul className={style.cardsGrid}>
            {
            filteredCharacters.length !== 0
            ?
              filteredCharacters.map((char) => {
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
              })

              :
              charactersGlobal.map((char) => {
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
              })
              }
          </ul>
          
        </div>
      )}
    </>
  );
};

export default Cards;
