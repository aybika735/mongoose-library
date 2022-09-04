const {Router} = require('express');
const {genrescontroller} = require('../controllers/genres.controller')
const router = Router();


router.post('/genres', genrescontroller.createGenre);

router.delete('/genres/:id', genrescontroller.deleteGenreById);

router.get('/genres', genrescontroller.getGenres);


module.exports = router;