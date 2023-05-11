import style from './Select.module.css'

const Select = () => {
    return (
        <div className={style.containSelect}>
            
            <div className={style.containSelectOption}>
              <label htmlFor="genre-filter" className={style.LabelSelectOption}>Ordenar por: </label>
              <select
                id="genre-filter"
                //   value={genreFilter}
                // onChange={handleGenreFilter}
                className={style.SelectOption}
              >
                <option value="" className={style.SelectOption}>Género</option>
                <option value="Acción" className={style.SelectOption}>Acción</option>
                <option value="Aventura" className={style.SelectOption}>Aventura</option>
                <option value="Estrategia" className={style.SelectOption}>Estrategia</option>
                <option value="Deportes" className={style.SelectOption}>Deportes</option>
                <option value="Rol" className={style.SelectOption}>Rol</option>
              </select>
            </div>


            <div className={style.containSelectOption}>
              {/* <label htmlFor="order-filter" className={style.LabelSelectOption}>Orden:</label> */}
              <select
                id="order-filter"
                // value={orderFilter}
                // onChange={handleOrderFilter}
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
              >
                <option value="" className={style.SelectOption}>Destino</option>
                <option value="DB" className={style.SelectOption}>DB</option>
                <option value="API" className={style.SelectOption}>API</option>
              </select>
            </div>


          </div>
    )
}

export default Select;