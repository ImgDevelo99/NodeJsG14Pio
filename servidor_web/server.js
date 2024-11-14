// // importar el modulo http de node.js para crear el servidor web

// const http = require('http');

// //defino el puero en el que el servidor escuchara las solicitudes

// const PORT = 3000;

// //crear el servidor usando un metodo createServer de http
// const server = http.createServer((req, res) => {
//     res.statusCode = 200; // ok

//     //encabezado de la respuesta par aindicar tipo de contenido txt
//     res.setHeader('Content-type', 'text/plain');

//     res.end('Bienvenido a mi servidor web en Node.js');    
// });
// // metodo listen para que el servidor escuche en el puerto definido, crear una funcion callback para que se 
// // ejecute cuando el servidor empiece a funcionar.

// server.listen(PORT, () => {
//     console.log(`servidor en ejecucion en el puerto http://localhost:${PORT}`);
// });

const http = require('http');
const fs = require('fs');
const PORT = 3000;

//crear el servidor http
const server = http.createServer((req, res) => {
    //si la solicitud es para la ruta principal / y el metodo es get
    if(req.url === "/" && req.method === 'GET')// manejo ruta principal
fs.readFile('formulario.html', (err,data) => { //lectura y envio del archivo
    if(err){
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end("error interno del servidor");
    }else{
        res.writeHead(200, { 'Content-type': 'text/html'});
        res.end(data)
    }
});

})

