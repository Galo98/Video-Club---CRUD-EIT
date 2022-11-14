const express = require('express')
const routerPeliculas = express.Router()


routerPeliculas.get("/", (req, res) => {
    res.render('index')
})

// VER PELICULAS
routerPeliculas.get("/listado", (req, res) => {
    //res.send('Listado de pelicula con la posibilidad de CRUD')
    res.render('peliculas/index')
})

// CREAR PELICULA
routerPeliculas.get("/create", (req, res) => {
    // res.send('Va a mostrar un formulario para crear una pelicula')
    res.render('peliculas/create')
})

routerPeliculas.post("/", (req, res) => {
    res.send('Va a guardar en la base de datos, una pelicula')
})

// EDITAR PELICULA
routerPeliculas.get("peliculas/edit/:id", (req, res) => {
    // res.send('Va a editar las peliculas')
    res.render('peliculas/edit')
})

routerPeliculas.put("/:id", (req, res) => {
    res.send('Va a guardar la pelicula editada')
})

// BORAR PELICULA
routerPeliculas.delete("/:id", (req, res) => {
    res.send('Va a borrar una pelicula')
})

// VER UNA PELICULA
routerPeliculas.get("/:id", (req, res) => {
    // res.send('Listado de una pelicula')
    res.render('peliculas/show')
})

module.exports = routerPeliculas