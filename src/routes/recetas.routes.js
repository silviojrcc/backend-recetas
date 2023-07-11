import { Router } from "express";
import { crearReceta, obtenerRecetas } from "../controllers/recetas.controller";

const router = Router();

router.route('/recetas').get(obtenerRecetas).post(crearReceta);

export default router;
