const express = require('express')
/* const routerPeliculas = require('./routes/peliculas.routes.js') */
const { engine } = require('express-handlebars')

require('dotenv').config()
const app = express()

app.engine('hbs', engine(
    {
        extname: '.hbs'
    }
))

// Middleware

app.use(express.static('public'))

app.set('view engine' , 'hbs')

// routes (IMPORTANTE OCLOCAR LAS RUTAS ACA, es decir abajo de los middlewares)

/* app.use(routerPeliculas) */
app.use('/peliculas', require('./routes/peliculas.routes.js'))

const PORT = process.env.PORT

app.listen(PORT, (err) => {
    if (err) throw new Error(`Tuvimos un problema ${err}`)
    console.log(`Todo funcionando piola en el puerto: ${PORT}`)
})