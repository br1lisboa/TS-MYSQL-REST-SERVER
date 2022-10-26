// Atencion: Usamos imports en vez de require
import express, { Application } from 'express';

class Server {
    // A diferencia de js vanila, aca tenemos que definir las propiedades antes de utilizarlas
    private app: Application;
    private port: string;

    constructor() {

        this.app = express();
        this.port = process.env.PORT || '8000';

    }

    // Metodo para levantar el servidor
    listen() {

        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`)
        })

    }

}

export default Server;