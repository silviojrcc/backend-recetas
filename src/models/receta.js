import { Schema, model } from "mongoose";

const recetaSchema = new Schema({
    nombreReceta: {
        type: String,
        minLength: 3,
        maxLength: 20,
        required: true,
        unique: true,
    },
    descripcionReceta: {
        type: String,
        minLength: 10,
        maxLength: 200,
        required: true,
    },
    ingredientesReceta: {
        type: [String]
    },
    pasosReceta: {
        type: [String]
    }
});

const Receta = model("receta", recetaSchema);

export default Receta;