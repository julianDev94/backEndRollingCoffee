// nombre de la estructura debe ir en singular porque nos referimos a un solo producto. Aca definimos el schema
// el modelo tambien representa a una coleccion de documentos
// el schema es la representacion de la estructura de datos que voy a guardar en mongo db
import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema({
    nombreProducto: {
        type: String,
        required: true,
        unique: true,
        minLength: 2,
        maxLength: 40
    },
    precio:{
        type: Number,
        required: true,
        min: 1000,
        max: 8000
    },
    urlImagen:{
        type: String,
        required: true,
        //validar url de imagen
    },
    categoria: {
        type: String,
        required: true,
        enum: ['Infusiones','Batidos','Dulce']
    },
    descripcionBreve:{
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    },
    descripcionAmplia:{
        type: String,
        required: true,
        minLength: 5,
        maxLength: 200
    }
})

const Producto = mongoose.model('producto', productoSchema) //esta linea crea el modelo que es la coleccion de documentos. Como parametro va el nombre del documento en singular (mongo le agrega una s al final) y el schema que creamos
export default Producto;