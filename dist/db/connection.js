"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Creamos una nueva instancia se sequelize
const db = new sequelize_1.Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    //logging:false
}); //>1er argunmento el nombre de la base de datos, 2do username, 3er contraseña, 4ta config
exports.default = db;
//# sourceMappingURL=connection.js.map