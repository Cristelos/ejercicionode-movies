const movies = require("../models/movies.models");

//Gets
const getMovies = async (req,res) => {
    try {
        const allMovies = await movies.find(); //Recojo los datos con una petición a mongo
        return res.status(200).json(allMovies);// devuelvo los datos en formato json con un statur 200
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getMoviesById = async (req,res) => {
    try {
        const {id} = req.params;
        const movieSearchById = await movies.findById(id);
        if(!movies){
            return res.status(404).json({'message':'Movie not found'})
        }
        return res.status(200).json(movieSearchById);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getMoviesByTitle = async (req,res) => {
    try {
        const {title} = req.params;
        // console.log(title);
        const movieByTitle = await movies.find({title: title});
        return res.status(200).json(movieByTitle);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getMoviesByGenre = async (req,res) => {
    try {
        const {genre} = req.params;
        const movieByGenre = await movies.find({genre: genre});
        return res.status(200).json(movieByGenre);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getMoviesByYear = async (req,res) => {
    try {
        const {year} = req.params;
        const movieByYear = await movies.find({year:{$gt:year}});
        return res.status(200).json(movieByYear);
    } catch (error) {
        return res.status(500).json(error);
    }
}

//Post
const postMovies = async (req,res) => {
    try {
        console.log(req.body);
        // const {title, director, year, genre} = req.body;
        // const newMovie = new movies({title, director, year, genre});//Creamos una nueva película con los datos enviados
        const newMovie = new movies(req.body);

        const createMovies = await newMovie.save();//Guardamos la película en mongo
        return res.status(201).json(createMovies); //Nos devuelve el nuevo elemento
        
    } catch (error) {
        return res.status(500).json(error);
    }
};

//Put
const putMovies = async (req,res) => {
    try {
        const {id} = req.params;
        const putMovie = new movies(req.body);
        putMovie._id = id;

        const updateMovie = await movies.findOneAndUpdate(id, putMovie,{new: true});//Buscamos por id y actualizamos el elemento
        if(!updateMovie){ //Controlamos que existe la película y si no, enviamos un error 404
            return res.status(404).json({"message":"Movie not found"});
        }
        return res.status(200).json(updateMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
};

//Delete
const deleteMovies = async (req,res) => {
    try {
        const {id} = req.params;//Le pasamos el id
        const deleteMovie = await movies.findOneAndDelete(id);//Le decimos que borramos el elemento 
        if(!deleteMovie){  //Si no existiera devolvemos 404
            return res.status(404).json({"message":"Movie not found"});
        }
        return res.status(200).json(deleteMovie);// y si existiera lo eliminamos 
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {getMovies, postMovies, putMovies, deleteMovies,getMoviesById,getMoviesByTitle,getMoviesByGenre,getMoviesByYear};  