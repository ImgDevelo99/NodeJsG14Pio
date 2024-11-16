//importar los modulos
const express = require('express');
//creamos la instancia de la pp expres
const app = express();
const PORT = 5000;

//middleware para procesar los datos JSON en la peticiones
app.use(express.json());

//bd en memoria
let libros = [];

//ruta GET
app.get('/libros',(req, res) => {
    res.json(libros);
});

//ruta GET : obtener por id
app.get('/libros/:id', (req, res) =>{
    const idlibro = parseInt(req.params.id);//obtiene el valor del parametro id de la url sea un ID
    const libro = libros.find(l => l.id === idlibro); //busque en ele arreglo libros el primer objeto que tenga un ID

    if(libro){
        res.json(libro);
    }else{
        res.status(404).json({mensaje: 'libro no encontrado en la biblioteca'});
    }
} );

//ruta POST
app.post('/libros',(req, res) => {
    const nuevoLibro = req.body;

    if(!nuevoLibro.id || !nuevoLibro.titulo || !nuevoLibro.autor){
        return res.status(400).json({mensaje: 'el libro debe tener id,titulo y autor'});
    }
    libros.push(nuevoLibro);
    res.status(201).json({mensaje: 'libro añadido correctamente', libro: nuevoLibro});
});

//ruta PUT
app.put('/libros/:id', (req, res) => {
    const idlibro = parseInt(req.params.id);
    const indice = libros.findIndex(l => l.id === idlibro);

    if(indice !== -1){
        libros[indice] = req.body;
        res.json({mensaje: 'Libro actualizado correctamente', libro: libros[indice]});
    }else{
        res.status(404).json({mensaje: 'libro no encontrado'});
    }
});

//ruta DELETE
app.delete('/libros/:id',(req, res) => {
    const idlibro = parseInt(req.params.id);
    const indice = libros.findIndex(l => l.id === idlibro);

    if(indice !== -1){
        libros.splice(indice, 1);
        res.json({mensaje: 'libro eliminado correctamente'});
    }else{
        res.status(404).json({mensaje: 'libro no encontrado'});
    }
});

app.listen(PORT,() => {
    console.log(`servidor corriendo en http://localhost:${PORT}`);
})

