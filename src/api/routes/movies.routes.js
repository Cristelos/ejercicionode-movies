const express = require("express");

const router = express.Router();

const {
  getMovies,
  postMovies,
  putMovies,
  deleteMovies,
} = require("../controllers/movies.controllers");

router.get("/", getMovies);

router.post("/", postMovies);

router.put("/:id", putMovies);

router.delete("/:id", deleteMovies);

module.exports = router;
