import { Sequelize } from "sequelize";

// Creamos una nueva instancia se sequelize
const db = new Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    //logging:false
});//>1er argunmento el nombre de la base de datos, 2do username, 3er contraseña, 4ta config


export default db;