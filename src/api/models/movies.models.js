const mongoose = require('mongoose');

//Obtengo el schema de mongoose
const Schema = mongoose.Schema;

//Creamos el schema de nuestra entidad movies
const movieSchema = new Schema({
     title: {type: String, required: true},
     director: {type: String, required: true},
     year: {type: String, required: true},
     genre: {type: String, required: true},
},{
    //esto nos va a generar dos campos más de los anteriores, que son fecha de creación y fecha de modificación
    timestamps: true,
});


//Generamos el modelo de nuestra entidad en base a nuestro Schema
const movies = mongoose.model('movie',movieSchema);

//Lo exportamos
module.exports = movies;
