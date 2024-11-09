//modulo file system (fs),: es un modulo nativo que me permite interactuar con el sistema de
//archivos, puede leer, escribir, actualizar, y eliminar archivos y directorios en el sistema operativo,
// deonde se ejecuta la aplicacion.
//es un modulo esencial para trabajar con archivos y manipular datos en el servidor
//https://nodejs.org/api/fs.html

/**
 * leer archivos
 * crear archivos
 * actualizar archivos
 * eliminar archivos
 * 
*/
//impirtar el modulo fs
// import fs from 'fs';

// //se escribe de manera asincronica un archivo tipo txt
// const data = "este es un mensaje de prueba, de escritura en un archivo fs";
// fs.writeFile('archivoEjemplo.txt', data, (err) =>{
//     if(err){
//     console.error("error al escribir el archivo", err);
//     return;
//     }
//     console.log("archivo creado  y datos escritos exitosamente");
// }) ;

// //leer el archivo despues de crearlo
// fs.readFile("archivoEjemplo.txt", "utf8", (err, contenido) => {
//     if(err){
//         console.error("Error al leer el archivo", err);
//         return;
//     }
//     console.log("contenido del archivo: ",contenido);
// });
//--------------------------------------------------------------------------------------------------------
//importar el modulo fs y el modulo path = para rutas
// import fs from 'fs';
const fs =  require('fs');
const path = require('path');

//definir la ruta completa del archivo para que se guarde
const dataPath = path.join(__dirname, 'productos.json');

//funcion para leer el contenido
function leerProducto() {
    try {
        const data = fs.readFileSync(dataPath, 'utf8');
        return JSON.parse(data);// convertir el contenido a un objeto

    } catch (error) {
        return[];
        
    }
}
//funcion escribir
function escribirProducto(productos){// writeFileSync = es un funcion asincrona del modulo fs
    //dataPath = es la ruta del archivo donde se guardara
    //JSON.stringify = convierte el objeto productos en una cadena json
    //producto = es el objeto que se desea guardar en el archivo
    //null = no se modifica la estructura del objeto
    //2 =cantidad de espacios
    fs.writeFileSync(dataPath, JSON.stringify(productos, null, 2));// es convertir el objeto en una cadena JSON
}

//funcion agregar
function agregarProducto(nombre, precio){
    //
    const productos = leerProducto();//cargar el array de productos desde el archivo.json
    const nuevoProducto = { id:Date.now(), nombre, precio};// crear  un id unico, nombre y un precio
    //agregar el nuevo producto al array
    productos.push(nuevoProducto);
    escribirProducto(productos);

    console.log("producto agregado: ", nuevoProducto);
}

//funcion listar
function listarProductos(){
    const productos = leerProducto();
    console.log("lista de productos",productos);
}

agregarProducto("telefono", 500000);
agregarProducto("portatil", 23000);
agregarProducto("audifonos", 12000);
listarProductos();//listar todos los producto
