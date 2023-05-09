const { Videogame } = require('../db')
const axios = require('axios')
const { getAllGames, createGame, getGameByName  }= require('../controllers/videogamesControllers')
require('dotenv').config();
const {
    API_KEY
} = process.env;

// get
const handleVideogameId = async (req, res) => {

     try {

    const { idVideogame } = req.params;
    // const process = isNaN(idVideogame) ? 'DB' : 'API';

    if(isNaN(idVideogame)) {
        const gameDB = await Videogame.findByPk(idVideogame);
        return res.status(200).json(gameDB)
    }
    else{ 
        const data = [(await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`)).data]
        const gameAPI = clean(data)
        return res.status(200).json(gameAPI[0])
    } 
    // const gameById = await getGameById(idVideogame, process)
    //const gameById = await getGameById(idVideogame)
    //res.status(200).json(gameById)
        

     } catch (error) {
         res.status(404).json({error: error.message})
     }


}

/********************************************/
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

/*******************************************/

const handleAllGame = async (req, res) => {
    
    try {
        const allGames = await getAllGames()
        res.status(200).json(allGames)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const handleGetByName = async (req, res) => {
 try {
    const { name } = req.query

 const results = await getGameByName(name)
 res.status(200).json(results)

 } catch (error) {
    res.status(400).json({error: error.message})
 }

}

// post 
const handleCreateGame = async (req, res) => {
    
    try {
        const { Name, Description, Platforms, Image, Released_at, Rating, VideogameGenre } = req.body
        const newGame = await createGame(Name, Description, Platforms, Image, Released_at, Rating, VideogameGenre)

        res.status(201).json(newGame)

    } catch (error) {
        res.send({error:error.message})
    }
}

module.exports = { handleVideogameId, handleAllGame, handleGetByName, handleCreateGame }