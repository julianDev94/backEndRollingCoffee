import { Router } from "express";
import { crearProducto, listarProductos } from "../controllers/productos.controllers.js";
import { obtenerUnProducto } from "../controllers/productos.controllers.js";
// De express import un enrutador para definir las rutas y la instancio
const router = Router();

router.route('/productos').get(listarProductos).post(crearProducto)
router.route('/producto/:id').get(obtenerUnProducto);
export default router;