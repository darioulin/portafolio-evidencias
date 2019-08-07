const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ObjectId = mongoose.Schema.ObjectId; // Generar string aleatorio

const movieSchema = new Schema({
    movieId: ObjectId,
    title: String, 
    year: Number,
    description: String,
    image: [String],
    theme: {
        type: "String",
        enum: ["comedia", "drama", "accion"]
    },
    director: {
        type: String,
        default: 'Espejo'
    }
    });

    const Movie = mongoose.model('Movie', movieSchema);

    module.exports = { Movie }