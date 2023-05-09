const getAllGenres = require('../controllers/genreControllers')

const handlerAllGenre = async (req, res) => {
    
    try {
        const allGenres = await getAllGenres()
        res.status(200).json(allGenres)
    } catch (error) {
        res.send({error:error.message})
    }
}

module.exports = handlerAllGenre;