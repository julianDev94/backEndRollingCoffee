import Producto from "../database/model/producto";


export const listarProductos = (req, res) => {
  console.log("Desde listar producto");
  res.send("Enviar lista productos...");
};
