// Importa la aplicación principal desde app.js
import app from "./app.js";
// Importa y ejecuta la configuración de la base de datos
import "./databse.js";

// Crea una función principal asincrónica
// que se encarga de ejecutar el servidor
async function main() {
  const port = 4000; // Define el puerto en el que se ejecutará el servidor
  app.listen(port);  // Inicia el servidor en el puerto especificado
  console.log("Server on port " + port); // Muestra un mensaje en consola indicando que el servidor está en funcionamiento
}

// Ejecuta la función principal para iniciar todo
main();