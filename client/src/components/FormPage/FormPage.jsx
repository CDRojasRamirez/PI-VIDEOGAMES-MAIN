import { useState } from "react";

const FormPage = () => {

  const [showGenres, setShowGenres] = useState(false);

  const toggleGenres = () => {
    setShowGenres(!showGenres);
  };

  return (
    <div style={{ position: "relative", height: "150px" }}>
      <h3 style={{ color: "white" }}>Formulario</h3>
      <form action="">
        <label htmlFor="" style={{ color: "white" }}>
          Nombre:{" "}
        </label>
        <input type="text" />
        <label htmlFor="" style={{ color: "white" }}>
          Descripcion:{" "}
        </label>
        <input type="text" />
        <label htmlFor="" style={{ color: "white" }}>
          Plataformas:{" "}
        </label>
        <input type="text" />
        <label htmlFor="" style={{ color: "white" }}>
          Fecha de lanzamiento:{" "}
        </label>
        <input type="text" />
        <label htmlFor="" style={{ color: "white" }}>
          Rating:{" "}
        </label>
        <input type="text" />
        <label htmlFor="" style={{ color: "white" }}>
          Generos:{" "}
        </label>
        <select
          name=""
          id="selectGenres"
          style={{
            color: "white",
            position: "absolute",
            top: "100%",
            zIndex: "1",
          }}
          multiple
          required
          size={showGenres ? "5" : "1"}
          onClick={toggleGenres}
        >
            <option value="DEFAULT" disable style={{ color: "white" }}>Genres</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="RPG">RPG</option>
          <option value="Shooter">Shooter</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Indie">Indie</option>
          <option style={{ color: "white" }} value="Platformer">
            Platformer
          </option>
          <option value="Massively Multiplayer">
            Massively Multiplayer
          </option>
        </select>
      </form>
    </div>
  );
};

export default FormPage;
