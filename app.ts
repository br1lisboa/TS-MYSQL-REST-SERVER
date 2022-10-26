import Server from "./models/server";
// Para usar variables de entornos, importamos el paquete dotenv, y configuramos
import dotenv from "dotenv";

// Configurar dot.env
dotenv.config();

const server = new Server();

server.listen();