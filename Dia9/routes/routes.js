const express = require('express');
const router = express.Router();
const { Movie } = require("../models/movie");

router.get('/', function (req, res) {
    res.status(200).send({response: "Ok Perfecto"});
});

router.post("/api/v1/pelicula", (req, res) => {
    const { title, year, description, image, theme, director } = req.body;

    const newMovie = Movie ({
        title,
        year,
        description,
        image, 
        theme,
        director
    })
    newMovie.save((err, pelicula) => {
        err ? res.status(409).send(err) : res.status(402).send(pelicula)
    })
    console.log(req.body);
    // res.status(200).send({response: "Mi primer POST"});
    
});

router.get("/api/v1/pelicula", (req, res) => {
        Movie.find().exec()
        .then(movies => res.status(200).send(movies))
        .catch(err => res.status(404).send(err))
    });

router.get("/api/v1/peliculaById/", (req, res) => {
    const { id } =  req.query;
    Movie.findById(id).exec()
        Movie.find().exec()
        .then(movies => res.status(200).send(movies))
        .catch(err => res.status(404).send(err))
    });

//Read

router.get("/api/v1/busqueda/pelicula", (req, res) => {
    const { q } = req.query;
    Movie.find({ title: q}).exec()
    .then(movie => {
        movie.length > 0
        ? res.status(200).send(movie)
        : res.status(404).send("Not Found")        
        })
    .catch(err => res.status(404).send(err))
})

//Update 

router.put("/api/v1/peliculas/update", (req, res) => {
    const { id } = req.query; 
    const body =  req.body;
    Movie.findByIdAndUpdate(id, { $set: body}, { new: true })
    .then(newMovie => {
        console.log(newMovie);
        if(newMovie !== null){
            res.status(202).send(newMovie)
        }else{
            res.status(404).send("No se puede actualizar")
        }
    })
    .catch(err => res.status(404).send(err))
});

//Modificar parcialmente el registro
router.patch("/api/v1/peliculas/update", (req, res) => {
    const { id } = req.query; 
    const body =  req.body;
    Movie.findByIdAndUpdate(id, { $set: body}, { new: true })
    .then(newMovie => {
        console.log(newMovie);
        if(newMovie !== null){
            res.status(202).send(newMovie)
        }else{
            res.status(404).send("No se puede actualizar")
        }
    })
    .catch(err => res.status(404).send(err))
});

//Delete
router.delete("/api/v1/peliculas/delete", (req, res) =>{
    const { id } = req.query; 
    
    Movie.findByIdAndRemove(id).exec()
    .then(pelicula => {
    pelicula !== null
    ? res.status(200).send({ mensaje : "Película Eliminada Exitosamente", body : pelicula})
    : res.status(302).send("Registro no eliminado")
    })  
    .catch(err => res.status(404).send(err + "Registro no eliminado"))
});

module.exports = router;