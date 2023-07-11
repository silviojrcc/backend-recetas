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