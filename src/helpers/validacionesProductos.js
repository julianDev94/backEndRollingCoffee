import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

export const validarProducto = [
  check("nombreProducto")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 2, max: 40 })
    .withMessage("La cantidad de caracteres debe estar entre 2 y 40"),
  check("precio")
    .notEmpty()
    .withMessage("El precio es obligatorio")
    .isNumeric()
    .withMessage("El valor ingresado no es un numero")
    .custom((value) => {
      if (value >= 50 && value <= 10000) {
        return true;
      } else {
        throw new Error("El precio debe estar entre $50 y $10000");
      }
    }),
    (req, res, next)=>{
        resultadoValidacion(req, res,next)
    }
];

export default validarProducto;