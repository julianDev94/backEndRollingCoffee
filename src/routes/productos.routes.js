import { Router } from "express";
import { crearProducto, listarProductos } from "../controllers/productos.controllers.js";
// De express import un enrutador para definir las rutas y la instancio
const router = Router();

router.route('/productos').get(listarProductos).post(crearProducto)

export default router;