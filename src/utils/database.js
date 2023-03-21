//Este archivo es para conectarnos a la base de datos

const mongoose = require('mongoose');


//const DB_URL = "mongodb://localhost:27017";
//const DB_URL = process.env.DB_URL; //aquí lo hemos conectado a nuestra base de datos de mongodb

//const DB_URL = "mongodb+srv://root:NUESTRO PASSWORD@cluster0.iefldp7.mongodb.net/AQUÍ NOMBRE BBD?retryWrites=true&w=majority"; 

const connect = async () => {

    try {

        const db = await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const {name, host} = db.connection;
        console.log(`Connected to ${name} DB in host: ${host}`);
        
    } catch (error) {
        console.log(`He tenido un error al conectar con mi BBDD ${error}`);
    }
};  

module.exports = {connect};