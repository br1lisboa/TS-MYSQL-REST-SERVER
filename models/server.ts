// Atencion: Usamos imports en vez de require
import express, { Application } from 'express';
import usersRoutes from '../routes/user.router';
import cors from "cors";

import db from '../db/connection';

class Server {
    // A diferencia de js vanila, aca tenemos que definir las propiedades antes de utilizarlas
    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users'
    };

    constructor() {

        this.app = express();
        this.port = process.env.PORT || '8000';

        this.connectDB()

        // Activamos nuestros middle
        this.middlewares()

        // Definir mis rutas
        this.routes();

    };

    // Conectar BD
    async connectDB() {

        try {
            await db.authenticate();
            console.log('db online');
        } catch (err) {
            throw new Error()
        }

    };

    // Middle
    middlewares() {

        //CORS
        this.app.use(cors());

        //Lectura del body - pareseo
        this.app.use(express.json())

        //Carpeta publica
        this.app.use(express.static('public'))

    };

    // Metodo para rutas
    routes() {

        this.app.use(this.apiPaths.users, usersRoutes);

    };

    // Metodo para levantar el servidor
    listen() {

        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`)
        });

    };

};

export default Server;