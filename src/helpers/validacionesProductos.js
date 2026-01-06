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
  check("urlImagen")
    .notEmpty()
    .withMessage("La url de la imagen es obligatoria")
    .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
    .withMessage("La imagen debe tener un formato de URL valida"),
  check("categoria")
    .notEmpty()
    .withMessage("La categoria es obligatoria")
    .isIn(["Infusiones", "Batidos", "Dulce"])
    .withMessage(
      "La categoria debe ser una de las siguientes: Infusiones, Batidos, Dulce "
    ),
  check("descripcionBreve")
    .notEmpty()
    .withMessage("La descripcion breve es obligatoria")
    .isLength({ min: 5, max: 50 })
    .withMessage("La cantidad de caracteres debe estar entre 2 y 40"),
  check("descripcionAmplia")
    .notEmpty()
    .withMessage("La descripcion amplia es obligatoria")
    .isLength({ min: 5, max: 200 })
    .withMessage("La cantidad de caracteres debe estar entre 2 y 40"),
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];

export default validarProducto;
