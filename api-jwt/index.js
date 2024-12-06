require('dotenv').config();//carga las variables de entorno
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');// importando

const app = express(); //instanciando express
const PORT = process.env.PORT || 3000;

//middleware
app.use(bodyParser.json()); //recibe solicitudes de cleinte en formato json

//Rutas
app.use('/api/auth', authRoutes);//todas las rutas dentro de authRoutes prefijas /api/auth/login

app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});




