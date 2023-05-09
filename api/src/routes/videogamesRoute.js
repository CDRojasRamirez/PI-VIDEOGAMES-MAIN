const { Router } = require('express');
const { handleVideogameId, handleAllGame,handleGetByName, handleCreateGame } = require('../handlers/videogameHandler')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const videogamesRoute = Router();

//rutas get
videogamesRoute.get('', handleAllGame)
videogamesRoute.get('/name', handleGetByName)
videogamesRoute.get('/:idVideogame', handleVideogameId)


//rutas post
videogamesRoute.post('', handleCreateGame)


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = videogamesRoute;
