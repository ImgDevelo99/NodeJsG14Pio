//importar las librerias necesarias
const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
// const Item = require('./model');

//instanciamos express
const app = express();

//Middleware para analizar las solicitudes JSON
app.use(bodyParser.json());

//conexion a mongoDB compass
mongoose.connect('mongodb://localhost:27017/Productos')
.then(() => console.log('Conexion a la BD exitoxamente') )
.catch((error) => console.log('Error al conectarse con la BD', error));

const PORT = process.env.PORT || 3000;

//inicializar el servidor
app.listen(PORT, () => {
    console.log(`servidor en ejecucion en http://localhost:${PORT}`);
});

//--------------CRUD----------------------------------------------
const Item = require('./model');

//crear un nuevo item
app.post('/items', async (req, res) => {
    const {name, description, price} = req.body;

    try{
        const newItem = new Item({name, description, price});
        await newItem.save();
        res.status(201).send(newItem);
    }catch (error){
        res.status(400).send('Error al crear el item')
    }
});

//obtener todos los item
app.get('/items', async (req, res) => {
    try{
    const items = await Item.find();
    res.status(201).send(items);
    }catch (error){
        res.status(400).send('Error al obtener los item');
    }
});

//obtener un item por ID
app.get('/items/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if(!item){
            return res.status(404).send('Item no existe en la bd');
        }
        res.status(200).send(item);
    } catch (error) {
        res.status(400).send('Error al obtener el item')
        
    }
});

//Actualizar un item por ID
app.put('/items/:id', async (req, res) => {
    try {
        const updateItem = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true});//devuelve un documento actualizado despues de aplicar los cambios
        if(!updateItem){
            return  res.status(404).send('No se encontro el item');
        }
        res.status(200).send(updateItem);
    } catch (error) {
        res.status(400).send('Error al actualizar el item'); 
    }
});

//Eliminar un item por ID
app.delete('/items/:id', async(req,res)=>{
    try {
    const deleteItem = await Item.findByIdAndDelete(req.params.id);
    if(!deleteItem) {
        return res.status(404).send("id no encontrado");
    }
    res.status(200).send("eliminado correctamente");
    } catch (error) {
    res.status(400).send("error al eliminar el item"); 
    }
    });


