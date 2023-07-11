import { Router } from "express";
import { crearReceta, obtenerReceta, obtenerRecetas } from "../controllers/recetas.controller";

const router = Router();

router.route('/recetas').get(obtenerRecetas).post(crearReceta);

router.route('/recetas/:id').get(obtenerReceta);

export default router;
