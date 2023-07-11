import { Router } from "express";
import { crearReceta, eliminarReceta, obtenerReceta, obtenerRecetas } from "../controllers/recetas.controller";

const router = Router();

router.route('/recetas').get(obtenerRecetas).post(crearReceta);

router.route('/recetas/:id').get(obtenerReceta).delete(eliminarReceta);

export default router;
