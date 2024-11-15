// const express = require('express')
// const app = express()

// // respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
//   res.send('hello world')

const express = require('express');
const path = require('path');

const app = express(); //crear una instancia de la aplicacion express

const PORT = 3000;

//configurar Express para que procese los datos del formulario en formato URL
app.use(express.urlencoded({ extended : true})); // middleware que permite a express entender datos enviados- 

//definir la ruta para servir el archivo html
app.get('/',(req,res) => {
    //envia el archivo formulario.html al cliente
    res.sendFile(path.join(__dirname, 'formulario.html'))//
});

//define la ruta para procesar el envio del formulario
app.post('/submit', (req, res) => {
    //accede a los datos enviados en el formulario
    const datosFormulario = req.body;
    console.log("datos recibidos ",datosFormulario);
    res.end("formulario enviado correctamente");
});

app.listen(PORT, () => {
    console.log(`servidor funcionando en http://localhost:${PORT}`);
});