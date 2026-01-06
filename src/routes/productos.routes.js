import { Router } from "express";
import {
  crearProducto,
  listarProductos,
  editarProducto,
  obtenerUnProducto,
  borrarProducto,
} from "../controllers/productos.controllers.js";
import validarProducto from "../helpers/validacionesProductos.js";
// De express import un enrutador para definir las rutas y la instancio
// import { check } from "express-validator";

// utilizando express validator defino las validaciones que deben hacerse antes de llegar al servidor. Con el check puedo realizar un array de validaciones
// const validarProducto = [
//   check("nombreProducto")
//     .notEmpty()
//     .withMessage("El nombre es obligatorio")
//     .isLength({ min: 2, max: 40 })
//     .withMessage("La cantidad de caracteres debe estar entre 2 y 40"),
//   check("precio")
//     .notEmpty()
//     .withMessage("El precio es obligatorio")
//     .isNumeric()
//     .withMessage("El valor ingresado no es un numero")
//     .custom((value) => {
//       if (value >= 50 && value <= 10000) {
//         return true;
//       } else {
//         throw new Error("El precio debe estar entre $50 y $10000");
//       }
//     }),
// ];
//todo el codigo de validaciones lo llevo a la carpeta helpers para mejorar mi codigo


const router = Router();

router
  .route("/productos")
  .get(listarProductos)
  .post(validarProducto, crearProducto);
router
  .route("/productos/:id")
  .get(obtenerUnProducto)
  .put(editarProducto)
  .delete(borrarProducto);
export default router;
