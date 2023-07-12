import { Router } from "express";
import { crearReceta, editarReceta, eliminarReceta, obtenerReceta, obtenerRecetas } from "../controllers/recetas.controller";
import validarReceta from "../helpers/validarReceta";

const router = Router();

router.route('/recetas')
    .get(obtenerRecetas)
    .post(validarReceta, crearReceta);

router.route('/recetas/:id')
    .get(obtenerReceta)
    .put(validarReceta, editarReceta)
    .delete(eliminarReceta);

export default router;
