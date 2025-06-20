// Importa express para crear la aplicación web
import express from "express";
// Importa las rutas de tareas
import TaskRoutes from "./src/Routes/TaskRoutes.js"
// Importa swagger-ui-express para la documentación de la API
import swaggerUi from "swagger-ui-express";
// Importa fs para leer archivos del sistema
import fs from "fs";
// Importa path para manejar rutas de archivos
import path from "path";

// Crea una instancia de la aplicación de Express
const app = express();
// Lee y parsea el archivo de documentación Swagger en formato JSON
const swaggerDocument = JSON.parse(
    fs.readFileSync(path.resolve("./DocumentacionAuto.json"), "utf-8")
  );

  // Usa las rutas de tareas bajo el prefijo /api/task
app.use("/api/task",TaskRoutes);
// Usa Swagger UI para servir la documentación de la API bajo /api/docs
app.use("/api/docs",swaggerUi.serve,swaggerUi.setup(swaggerDocument));

export default app;
