import React from 'react'
import "./Pelicula.css"
const Pelicula = ({pelicula}) => {
    return (
        <div>
            <img src={pelicula.image} alt="..."></img>
            <h3 className="rojo">Título: {pelicula.title}</h3>
            <p>Año: {pelicula.year}</p>
            <p>Descripcion: {pelicula.year}</p>
            <p>Género:</p>
            <p>Director: {pelicula.director}</p>
        </div>
    )
}

export default Pelicula

