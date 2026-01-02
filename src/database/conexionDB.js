//libreria para hacer la conexion a la base de datos es mongoose ODM. Un ODM (object document mapping) es una libreria que mapea toda una base de datos y la representa como objetos y clases
// es una abstraccion entre la BD y el backend
import mongoose from "mongoose";
import 'dotenv/config';

const mongoURI = process.env.MONGODB_URI;
// console.log(mongoURI);

mongoose.connect(mongoURI);

const conexionDatos = mongoose.connection;

conexionDatos.once('open',()=>{
    console.log('BD conectada');
});

//esta funcion lo que dice es que una vez que noss hayamos conectado a la BD, se fije en el estado de la misma. El estado seria 'open',
// y la funcion ligada que queremos ver en la terminal..

// Lo que seria un registro en sql, en nosql seria un documento. El conjunto de documentos se llaman colecciones (collections)
// un schema es la estructura de los datos que se van almacenar en los documentos
// En la carpeta model, modelar el schema de nuestros productos
