const axios = require("axios");
const { Genres } = require('../db')
require('dotenv').config();
const {
    API_KEY
} = process.env;

// Define una función llamada "clean" que recibe un array como parámetro
const clean = (arr) => {
    // Crea un nuevo Set para almacenar géneros únicos
    const uniqueGenres = new Set();
    // Itera sobre cada juego en el array
    arr.forEach(game => {
      // Itera sobre cada género en el juego
      game.genres.forEach(genre => {
        // Agrega el nombre del género al Set de géneros únicos
        uniqueGenres.add(genre.name);
      });
    });
    // Convierte el Set de géneros únicos en un array y devuelve un objeto con la propiedad "Name" para cada género
    return [...uniqueGenres].map(name => ({ Name: name }));
  };
  
  // Define una función llamada "getAllGenres" que utiliza async/await
  const getAllGenres = async () => {
    // Obtiene los datos de la API de RAWG utilizando la clave de la API almacenada en la variable de entorno "API_KEY"
    const data = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)).data;
    // Extrae los resultados de los datos
    const arr = data.results;
    // Limpia los géneros en el array de juegos utilizando la función "clean"
    const onlyGenres = clean(arr);
    // Crea una instancia de la tabla "Genres" en la base de datos y agrega los géneros únicos utilizando "bulkCreate", ignorando duplicados
    await Genres.bulkCreate(onlyGenres, { ignoreDuplicates: true });
    // Devuelve los géneros únicos
    return onlyGenres;
  }; 

module.exports = getAllGenres;