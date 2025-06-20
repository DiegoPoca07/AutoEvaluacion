//Importamos express para crear el router
import express from "express"
//Importamos el controlador de tareas con las funciones 
import taskController from "../Controller/taskController.js"

//Creamos una constante para el router de express
const router = express.Router()

// Define la ruta raíz "/" para tareas:
// - POST: crear una nueva tarea
// - GET: obtener todas las tareas
router.route("/").post(taskController.post).get(taskController.get);

// Define la ruta "/:id" para tareas específicas por ID:
// - PUT: actualizar una tarea existente
// - DELETE: eliminar una tarea existente
router.route("/:id").put(taskController.put).delete(taskController.delete);

//Exportamos el router para usarlo en la aplicacion principal
export default router;