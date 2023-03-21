const express = require('express');
const dotenv = require('dotenv');
const {connect} = require('./src/utils/database');
const routerMovies = require('./src/api/routes/movies.routes');
const routerCinema = require('./src/api/routes/cinema.routes');

dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();
connect();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/movies', routerMovies);
app.use('/cinemas', routerCinema);


app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`));