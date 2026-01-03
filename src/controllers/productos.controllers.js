import Producto from "../database/model/producto.js";


  // console.log("Desde listar producto");
  // res.send("Enviar lista productos...");
export const listarProductos = async (req, res) => {

  //dentro del try no se puede responder 2 veces
  try {
    //pedir a la bd la lista de la coleccion de documentos de productos 
    const productos = await Producto.find({});
    res.status(200).json(productos);
  } catch (error) {
    console.log(error);
    res.status(404).json({mensaje: "No se pudo encontrar la lista de productos"})
  }
  
};

export const crearProducto = async (req, res)=>{
  try {
    
    //1- verificar datos del body
    console.log(req.body)
    //2- validar los datos

    //3- pedir a la BD crear el producto
    const productoNuevo = new Producto(req.body);
    await productoNuevo.save();

    //4- enviar status 201
    res.status(201).json({mensaje: "El producto fue creado correctamente"});
    
  } catch (error) {
   console.log(error); 
   res.status(400).json({
    mensaje: "No se pudo procesar la solicitud de crear Producto"
   });

  }
}