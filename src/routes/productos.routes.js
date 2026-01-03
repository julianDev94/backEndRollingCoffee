import { Router } from "express";
import { crearProducto, listarProductos, editarProducto, obtenerUnProducto } from "../controllers/productos.controllers.js";
// De express import un enrutador para definir las rutas y la instancio
const router = Router();

router.route('/productos').get(listarProductos).post(crearProducto);
router.route('/producto/:id').get(obtenerUnProducto).put(editarProducto);
export default router;