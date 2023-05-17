
import style from './SelectFavorite.module.css'
import { useDispatch } from "react-redux"
import { filtrarDestino, reset, filtrarGenre, filtrarOrder } from '../../redux/action';
import { useState } from 'react';


const SelectFavorite = () => {

  const dispatch = useDispatch()

  const handleDestino = (e) => {

      e.preventDefault()
      const { value } = e.target
      return dispatch(filtrarDestino(value))

  }

  const handleGenreFilter = (e) => {
      e.preventDefault()
      return dispatch(filtrarGenre(e.target.value))
  }

  const handleOrderFilter = (e) => {

    e.preventDefault()
    return dispatch(filtrarOrder(e.target.value))
  }
  
  const handleReset = () => {

      return dispatch(reset())
  }
  
    return (
        <div className={style.containSelect}>
            
            <div className={style.containSelectOption}>
              <label htmlFor="genre-filter" className={style.LabelSelectOption}>Ordenar por: </label>
              <select
                id="genre-filter"
                //   value={genreFilter}
                onChange={handleGenreFilter}
                className={style.SelectOption}
              >
                <option value="" className={style.SelectOption}>Género</option>
                <option value="Action" className={style.SelectOption}>Action</option>
                <option value="Adventure" className={style.SelectOption}>Adventure</option>
                <option value="RPG" className={style.SelectOption}>RPG</option>
                <option value="Shooter" className={style.SelectOption}>Shooter</option>
                <option value="Puzzle" className={style.SelectOption}>Puzzle</option>
                <option value="Indie" className={style.SelectOption}>Indie</option>
                <option value="Platformer" className={style.SelectOption}>Platformer</option>
                <option value="Massively Multiplayer" className={style.SelectOption}>Multiplayer</option>
              </select>
            </div>


            <div className={style.containSelectOption}>
              {/* <label htmlFor="order-filter" className={style.LabelSelectOption}>Orden:</label> */}
              <select
                id="order-filter"
                // value={orderFilter}
                onChange={handleOrderFilter}
                className={style.SelectOption}
              >
                <option value="" className={style.SelectOption}>Orden</option>
                <option value="asc" className={style.SelectOption}>Ascendente</option>
                <option value="desc" className={style.SelectOption}>Descendente</option>
              </select>
            </div>


            <div className={style.containSelectOption}>
              {/* <label htmlFor="destiny-filter" className={style.LabelSelectOption}>Destino:</label> */}
              <select
                id="destiny-filter"
                // value={orderFilter}
                // onChange={handleOrderFilter}
                className={style.SelectOption}
                onChange={ handleDestino }
                defaultValue={"DEFAULT"}
              >
                <option className={style.SelectOption} value="DEFAULT" disabled>Destino</option>
                {/* <option value="ambos" className={style.SelectOption}>Ambos</option> */}
                <option value="db" className={style.SelectOption}>DB</option>
                <option value="api"  className={style.SelectOption}>API</option>
              </select>
            </div>

            <div className={style.containSelectOption}>
              <button onClick={ handleReset } className={style.SelectOption}>Reset</button>
            </div>


          </div>
    )
}

export default SelectFavorite;