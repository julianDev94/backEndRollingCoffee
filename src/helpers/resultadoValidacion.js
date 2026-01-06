import { validationResult } from "express-validator";

// al ser un middlewar esta funcion debo traer un dato mas aparte de req y res. Esta propiedad del middlewar se llama next
const resultadoValidacion = (req, res,next ) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errores: errors.array() });
  }
  //si no hay errores debe continuar con la ejecucion 
  next();
};

export default resultadoValidacion;
