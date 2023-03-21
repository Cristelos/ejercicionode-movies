const mongoose = require('mongoose');
const movies = require('../api/models/movies.models');

const Movie = require('../api/models/movies.models'); 

const arrayMovies = [
    {
        "title": "Matrix",
        "director": "Hermanas Wachowski",
        "year": "1999",
        "genre": "Acción"
    },{
        "title": "The Matrix Reloaded",
        "director": "Hermanas Wachowski",
        "year": "2003",
        "genre": "Acción",
    },{
        "title": "Buscando a Nemo",
        "director": "Andrew Stanton",
        "year": "2003",
        "genre": "Animación"
    },{
        "title": "Buscando a Dory",
        "director": "Andrew Stanton",
        "year": "2016",
        "genre": "Animación"
    },{
        "title": "Interestelar",
        "director": "Christopher Nolan",
        "year": "2014",
        "genre": "Ciencia ficción"
    },{
        "title": "50 primeras citas",
        "director": "Peter Segal",
        "year": "2004",
        "genre": "Comedia romántica",
    }
]; 

mongoose.connect('mongodb+srv://root:root@cluster0.iefldp7.mongodb.net/peliculas?retryWrites=true&w=majority',{//aquí nos conectamos a nuestra BBDD en mongo db
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () =>{ //Esto es como un ternario reducido
    const allMovies = await movies.find();
    if(allMovies.length){
        await movies.collection.drop();
        console.log('Películas borradas ');
    } //le he dicho que me busque todas las películas y que me borre los anteriores
}).catch((error) => console.log('Error borrando películas',error)).then(async async => {
    const moviesMaps = arrayMovies.map((movie) => new Movie(movie));
    await movies.insertMany(moviesMaps);
    console.log('Películas insertadas')
}).catch((error) => console.log('Error insertando películas',error))
.finally(() => mongoose.disconnect());// Nos desconectamos de mongoose para que no nos quede una conexión abierta en nuestra semilla. TENEMOS QUE TERMINAR LA CONEXIÓN.  