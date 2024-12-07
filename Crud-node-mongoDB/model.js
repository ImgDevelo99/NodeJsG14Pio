const mongoose = require('mongoose');

//definir el esquema de la bd
const itemSchema = new mongoose.Schema({
    name: { type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true}
});

//crear un modelo a partir del squema
const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
