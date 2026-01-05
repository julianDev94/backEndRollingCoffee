import { Router } from "express";


const router = Router();

router.route('/usuarios').post(crearUsuario);