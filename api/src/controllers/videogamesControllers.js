const axios = require("axios");
const { Videogame, Genres } = require('../db')
require('dotenv').config();
const {
    API_KEY
} = process.env;
const { sequelize } = require('../db')
const { Op } = require('sequelize')

const getAllGames = async () => {
  
    const data = (
      await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}`
      )
    ).data;
    const arr = data.results;
    const infoDB = await Videogame.findAll();

    const infoApi = clean(arr)

    return [...infoDB, ...infoApi];

};


 const createGame = async ( Name, Description, Platforms, Image, Released_at, Rating, VideogameGenre) => {
  // const newGame = await Videogame.create({ Name, Description, Platforms, Image, Released_at, Rating, Genres})
  // return newGame;

  const genres = await Genres.findAll({
    where: {
      Name: VideogameGenre
    }
  });
  
  const genreIds = genres.map(gen => gen.Name)

  // Crear un nuevo registro de videogame
  const newGame = await Videogame.create({
    Name: Name,
    Description: Description,
    Platforms: Platforms,
    Image: Image,
    Released_at: Released_at,
    Rating: Rating,
    created: false,
    VideogameGenre: genreIds
  });
  
  // Agregar las relaciones entre el nuevo videojuego y sus géneros correspondientes
  //  await newGame.addGenres(Genres);
  
  return newGame;
  
}

const getGameByName = async (name) => {

  
  const data = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`)).data;
  const arr = data.results;
  const arrClean = clean(arr);
  const filtrado = arrClean.filter(ar =>  ar.Name.toLowerCase().includes(name.toLowerCase()));
  const infoDB = await Videogame?.findAll({ where: { Name: { [Op.iLike]: `%${name}%` }} });
  
  if(!infoDB.length || !filtrado.length) throw new Error('No existe un juego con ese nombre')
  
  result = [...(infoDB || []),...filtrado];
  return result.slice(0, 15);
}

const clean = (arr) => {
    return (
      arr &&
      arr.map((arr) => {
        return {
          ID: arr?.id,
          Name: arr?.name,
          Description: arr?.description,
          Platforms: arr.platforms?.map(plat => plat.platform.name),
          Image: arr?.image || arr?.background_image || arr?.image_background,
          Released_at: arr?.released_at || arr?.released,
          Rating: arr?.rating,  
          created: false,
          VideogameGenre: arr?.genres?.map(gen => gen.name)
        };
      })
    );
  };

  
  
module.exports = { getAllGames, createGame, getGameByName  };
