import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidaciones";

const validarReceta = [
    check("nombreReceta")
        .notEmpty()
        .withMessage('El nombre de la receta es obligatorio')
        .isLength({ min: 3, max:20 })
        .withMessage('El nombre de la receta debe tener entre 3 y 20 caracteres'),
    check("descripcionReceta")
        .notEmpty()
        .withMessage('La descripcion es obligatoria')
        .isLength({ min: 10, max: 200 })
        .withMessage('La descripcion debe tener entre 10 y 200 caracteres'),
    check('ingredientesReceta')
        .isArray()
        .withMessage('Debe ingresar un array de ingredientes'),        
    check('pasosReceta')
        .isArray()
        .withMessage('Debe ingresar un array de pasos'),        
    (req, res, next) => { resultadoValidacion(req, res, next) }
];

export default validarReceta;