import { Link } from "react-router-dom";
import style from "./SearchBar.module.css";
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ searchBtn, handleInicio }) => {
  const [game, setGame] = useState("");

  const handleChange = (e) => {
    setGame(e.target.value);
  };

  const handleKeyDown = (e) => {
    if(e.key === "Enter"){
      searchBtn(game)
    }
  }

  return (
    <div className={style.containerSearchBar}>

{/*******************************************************/}
      <Link to="/home">
        <button
          style={{
            top: "9.5px",
            right: "1205px",
            width: "300px",
            fontSize: "16px",
            padding: "20px",
            background: "none",
          }}
          onClick={() => handleInicio()}
        >
          Daniel's Arcade
        </button>
      </Link>

{/*******************************************************/}
      <input
        type="text"
        name="text"
        className={style.input}
        placeholder="Buscar un videojuego...."
        value={game}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={() => searchBtn(game)} className={style.btnStyle}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={style.iconLupa}/>
      </button>

      {/*******************************************************/}
      <Link to={"/favorites"} className={style.btn}>
        <button
          style={{
            top: "9.5px",
            right: "300px",
            width: "220px",
            fontSize: "16px",
            padding: "20px",
            background: "none",
          }}
        >
          Favorites
        </button>
      </Link>

{/*******************************************************/}
      <Link to={"/creategame"} className={style.btn}>
        <button
          style={{
            top: "9.5px",
            right: "43px",
            width: "220px",
            fontSize: "16px",
            padding: "20px",
            background: "none",
          }}
        >
          Create Game
        </button>
      </Link>
{/*******************************************************/}      
    </div>
  );
};

export default SearchBar;
