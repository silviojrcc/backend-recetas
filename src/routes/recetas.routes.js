import { Router } from "express";
import { crearReceta, editarReceta, eliminarReceta, obtenerReceta, obtenerRecetas } from "../controllers/recetas.controller";

const router = Router();

router.route('/recetas').get(obtenerRecetas).post(crearReceta);

router.route('/recetas/:id').get(obtenerReceta).put(editarReceta).delete(eliminarReceta);

export default router;
