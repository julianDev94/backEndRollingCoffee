// La logica de mi producto o sistema va en src/ controllers (controlador)
// Todas las rutas que definimos van en la carpeta routes
// Por ultimo la carpeta de la base de datos
// para poder utilizar el import y export en package configurar el type:module
// En el package en la zona de scripts podemos definir nuestros comandos. Para esto definimos dos comandos
// Uno para produccion y el otro para desarrollo
// El de produccion es el start
import express from 'express';
console.log('Hola mundo v2 jsjaj')

//1- para ejecutar nuestro backend debemos configurar un puerto. express() es una instancia de express
const app = express();
// crear una variable con express
app.set('port', 4000);
// obtengo esa variable creada para el puerto y con listen lo que hace es escucharla
app.listen(app.get('port'),()=>{
    console.log('Estoy en el puerto '+app.get('port'));
});


//2- configurar middleware del proyecto

//3- configurar las rutas
//el comando node --watch index.js complica el archivo index.js y lo reinicia si detecta cambios. Este se lo utiliza en desarrollo
// mejor utilizar para esto la liberia nodemoon -> mas estable, configurable
// el -g del comando para instalar nodemon nos dice que se va instalar de forma global en todos los proyectos de express que queramos hacer
// si no queremos esto e instalarlo de manera independiente cuando hagamos un nuevo proyecto hacerlo con el parametro --save-dev
// esto se va instalar como una devDependencie

