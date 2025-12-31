//libreria para hacer la conexion a la base de datos es mongoose ODM. Un ODM (object document mapper) es una libreria que mapea toda una base de datos como tipo objeto
import mongoose from "mongoose";
import 'dotenv/config';

const mongoURI = process.env.MONGODB_URI;
console.log(mongoURI);

mongoose.connect(mongoURI);

const conexionDatos = mongoose.connection;

conexionDatos.once('open',()=>{
    console.log('BD conectada');
});

//esta funcion lo que dice es que una vez que noss hayamos conectado a la BD, se fije en el estado de la misma. El estado seria 'open',
// y la funcion ligada que queremos ver en la terminal..
