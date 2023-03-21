const express = require('express'); 
const {getCinema, postCinema, putCinema, deleteCinema,  getCinemaById} = require('../controllers/cinema.controllers');
const router = express.Router(); 

router.get('/', getCinema);

router.get('/:id', getCinemaById);

router.post('/', postCinema);

router.put('/:id', putCinema);

router.delete('/:id', deleteCinema );

module.exports = router;