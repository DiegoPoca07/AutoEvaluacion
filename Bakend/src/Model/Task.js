//Schema de la coleccion donde se insertaran los datos en nuestra base de datos en mongo db atlas
import {Schema,model} from "mongoose"

//Definir el esquema de la coleccion task con sus campos y tipos de datos
const taskSchema = new Schema({
    title:{
        type:String, //Campo para el titulo de la tarea lo ponemos como tipo String
    },
    description:{
        type:String //Campo para la descripcion de la tarea lo ponemos como tipo String
    },
    completed:{
        type:Boolean //Campo para indicar si la tarea esta completada o no, lo ponemos como tipo Boolean
    }
},{
    timestamps:true, //Agrega automaticamente los campos de fecha de creacion y actualizacion
    strict:false //Permite que se puedan agregar campos adicionales que no esten definidos en el esquema
});

//Exportamos el modelo task 
export default model ("Task",taskSchema);