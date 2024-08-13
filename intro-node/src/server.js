const express = require('express');
const cors = require('cors')
const { routerPoductos } = require('./routes/producto.js')

// Creación del app de express
const app = express() // instancia de express
app.disable('x-powered-by') // deshabilitar la cabecera x-powered-by

//establecer el puerto
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json()) // Middleware para parsear el body de las peticiones

app.use(cors({
    origin: 'http://localhost:8081', // sudominio.com
    methods: 'GET,POST,PATCH,DELETE',
}))


//RUTAS
app.use('/productos', routerPoductos)



app.use((req, res) => {
    res.status(404)
        .json({
            error: true,
            message: "La ruta no existe"
        })
})


// lo poner en marcha
app.listen(PORT, () => {
    console.log(`El servidor se ejecuta en: http://localhost:${PORT}`)
})