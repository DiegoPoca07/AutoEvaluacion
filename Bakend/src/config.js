//Importamos dotenv para poder leer varables de entorno desde un archivo .env
import dotenv from "dotenv";

//Inicializamos la configuracion de dotenv para cargar las variables de entorno
dotenv.config();

//Exportamos un objeto de configuracion con los datos de la base de datos y el servidor
export const config ={
    db: {
        URI: process.env.DB_URI, //URL de la base de datos MongoDB
      },
      server: {
        port: process.env.PORT, //Puerto en el que se ejecutara el servidor
      }
}