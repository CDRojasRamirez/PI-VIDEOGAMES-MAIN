const { Router } = require('express');
const  videogamesRoute = require('./videogamesRoute')
const  genreRoute = require('./genreRoute')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const mainRouter = Router();

mainRouter.use('/videogames', videogamesRoute)
mainRouter.use('/genres', genreRoute)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = mainRouter;
