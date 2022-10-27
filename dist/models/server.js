"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Atencion: Usamos imports en vez de require
const express_1 = __importDefault(require("express"));
const user_router_1 = __importDefault(require("../routes/user.router"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.apiPaths = {
            users: '/api/users'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        // Activamos nuestros middle
        this.middlewares();
        // Definir mis rutas
        this.routes();
    }
    ;
    // Conectar BD
    //TODO: BD
    // Middle
    middlewares() {
        //CORS
        this.app.use((0, cors_1.default)());
        //Lectura del body - pareseo
        this.app.use(express_1.default.json());
        //Carpeta publica
        this.app.use(express_1.default.static('public'));
    }
    ;
    // Metodo para rutas
    routes() {
        this.app.use(this.apiPaths.users, user_router_1.default);
    }
    ;
    // Metodo para levantar el servidor
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
    ;
}
;
exports.default = Server;
//# sourceMappingURL=server.js.map