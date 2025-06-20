//Mando a llamo la constante que cree en el modelo en un import
import TaskModel from "../Model/Task.js"

// Creo un objeto para agrupar los métodos del controlador
const taskController = {}

// Creo el método GET: obtiene todas las tareas de la base de datos
taskController.get = async (req,res) => {
    const newTask = await TaskModel.find();
    res.status(200).json(newTask)
};


//Creo el método POST: crea una nueva tarea y la guarda en la base de datos
taskController.post = async(req,res) => {
    const {title,description,completed}=req.body;
    const newtask = new TaskModel ({title,description,completed});
    await newtask.save();
    res.status(200).json({Message : "The task has been added successfully"});
};


//Creo el método PUT: actualiza una tarea existente por su ID
taskController.put = async (req,res) => {
    const {title,description,completed}=req.body;

    await TaskModel.findByIdAndUpdate(req.params.id,{
        title,description,completed
    },
{new:true});

// Corrige el error en la respuesta (res.json.status(200) es incorrecto)
res.json.status(200).json({Message: "I have successfully updated the task"});
};


//Creo el método DELETE: elimina una tarea por su ID
taskController.delete = async (req,res) => {
    const deleteTask = await TaskModel.findByIdAndDelete(req.params.id);
    if(!deleteTask){
        // Si no se encuentra la tarea, responde con error 404
        res.status(404).json({message: "The task has not been found, please try again."});
    }
    // Si se elimina correctamente, responde con mensaje de éxito
    res.json({message: "You have successfully deleted the tasks "});
}

// Exporto el controller para usarlo en las rutas 
export default taskController;