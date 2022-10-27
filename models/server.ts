// Atencion: Usamos imports en vez de require
import express, { Application } from 'express';
import usersRoutes from '../routes/user.router';

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
        
        // Definir mis rutas
        this.routes();

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