const { Router } = require('express');
const handlerAllGenre = require('../handlers/genreHandler') 
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const genreRoute = Router();

genreRoute.get('', handlerAllGenre)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = genreRoute;
