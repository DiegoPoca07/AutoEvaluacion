// Importa mongoose para manejar la conexión con MongoDB
import mongoose from "mongoose";
// Importa dotenv para leer variables de entorno
import dotenv from 'dotenv';
// Importa la configuración personalizada
import {config} from "./src/config.js";


// Inicializa dotenv para cargar las variables de entorno
dotenv.config();

// Obtiene la URI de la base de datos desde la configuración
const URI=config.db.URI;

// Conecta a la base de datos usando la URI
mongoose.connect(URI);


//Comprueba que todo funcione

// Obtiene la conexión actual de mongoose
const connection = mongoose.connection;

// Evento: conexión exitosa
connection.once("open", () => {
  console.log("DB is connected");
});

// Evento: base de datos desconectada
connection.on("disconnected", () => {
  console.log("DB is disconnected");
});

// Evento: error en la conexión
connection.on("error", (error) => {
  console.log("error found" + error);
});