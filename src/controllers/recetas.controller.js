import Receta from "../models/receta";

export const obtenerRecetas = async (req, res) => {
    try{
        const recetas = await Receta.find();
        res.status(200).json(recetas);
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: 'Error al buscar las recetas',
        });
    }
}

export const obtenerReceta = async (req, res) => {
    try {
        const receta = await Receta.findById(req.params.id);
        res.status(200).json(receta);
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: 'No se pudo obtener la receta'
        });
    }
}

export const crearReceta = async (req, res) => {
    try {
        const recetaNueva = new Receta(req.body);
        await recetaNueva.save();
        res.status(201).json({
            message: 'Receta creada correctamente',
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: 'No se pudoi crear la receta',
        });
    }
}

export const eliminarReceta = async (req, res) => {
    try {
        await Receta.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: 'Receta eliminada correctamente'
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: 'No se pudo eliminar la receta'
        });
    }
}

export const editarReceta = async (req, res) => {
    try {
        await Receta.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            message: 'Receta modificada correctamente'
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: 'No se pudo modificar la receta, check server logs'
        });
    }
}