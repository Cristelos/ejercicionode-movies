const express = require("express");

const router = express.Router();

const {
  getMovies,getMoviesById, getMoviesByTitle,getMoviesByGenre,  getMoviesByYear, postMovies, putMovies, deleteMovies} = require("../controllers/movies.controllers");

router.get("/", getMovies);

router.get("/id/:id",getMoviesById);

router.get("/title/:title",getMoviesByTitle);

router.get("/genre/:genre", getMoviesByGenre);

router.get("/year/:year", getMoviesByYear);

router.post("/", postMovies);

router.put("/:id", putMovies);

router.delete("/:id", deleteMovies)

module.exports = router;
