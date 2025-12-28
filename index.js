// La logica de mi producto o sistema va en src/ controllers (controlador)
// Todas las rutas que definimos van en la carpeta routes
// Por ultimo la carpeta de la base de datos
// para poder utilizar el import y export en package configurar el type:module
// En el package en la zona de scripts podemos definir nuestros comandos. Para esto definimos dos comandos
// Uno para produccion y el otro para desarrollo
// El de produccion es el start
import express from 'express';
import cors from 'cors';
import 'dotenv/config'; //permite procesar variables dee entorno. Es una manera rapida de configurar el middleware
import morgan from 'morgan';
//1- para ejecutar nuestro backend debemos configurar un puerto. express() es una instancia de express
const app = express();
// crear una variable con express
// node tiene para acceder a las variables de entorno .env con process.env.PORT
app.set('port', process.env.PORT || 4000);
// obtengo esa variable creada para el puerto y con listen lo que hace es escucharla
app.listen(app.get('port'),()=>{
    console.log('Estoy en el puerto '+app.get('port'));
});


//2- configurar middleware del proyecto
// esto nos ayuda a entender las variables de entorno, que reciba conexiones remotas, que entienda el formato JSON.
// estos son funciones que se ejecutan en el backend generalmente antes de llegar a las rutas.
// son funciones de js que le dan una habilidad especial al back.
app.use(cors()); //permitir conexiones remotas
app.use(morgan('dev')); //nos da info extra en la terminal. Esta es en dev
//Estos middleware que se van a utilizar ya vienen en express
//Este permite a mi backend interpretar el formato json y cuando reciba una solicitud por ej post para crear un producto pueda
// extraer los datos del body y trabajar con esos datos
app.use(express.json()); //permite interpretar datos en formato json
app.use(express.urlencoded({extended: true})) //permite extraer los datos del body del request. {extended:true} es un objeto que extrae los datos
// del body de la solicitud que llegue. Es un middleware de Express que permite leer datos enviados desde formularios HTML.
//falta configurar el index.html

//3- configurar las rutas



//el comando node --watch index.js complica el archivo index.js y lo reinicia si detecta cambios. Este se lo utiliza en desarrollo
// mejor utilizar para esto la liberia nodemoon -> mas estable, configurable
// el -g del comando para instalar nodemon nos dice que se va instalar de forma global en todos los proyectos de express que queramos hacer
// si no queremos esto e instalarlo de manera independiente cuando hagamos un nuevo proyecto hacerlo con el parametro --save-dev
// esto se va instalar como una devDependencie

