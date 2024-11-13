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
const { console } = require('inspector');
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

//funcion actualizar ID
function actualizarProducto(id, nuevoProducto, nuevoPrecio ){
    const productos = leerProducto();
    //busca el indice del producto con el id
    const productoIndex = productos.findIndex(producto => producto.id === id );

    if (productoIndex === -1){
        console.log("producto no encontrado");
        return;
    }
        //vamos actualizar el nombre y el precio del producto encontrado

    //me actualiza los datos del producto que se encuentran en la posicion producto index
    productos[productoIndex] = {...productos[productoIndex], nombre: nuevoProducto, precio: nuevoPrecio}; //operador propagacion y luego sobreescribe
    escribirProducto(productos);
    console.log("producto actualizado", productos[productoIndex]);
}
//eliminar por id----------------------------------------------------
function eliminarProducto(id){
    let productos = leerProducto(); // cargar los productos
    const productosActualizados = productos.filter(producto => producto.id !== id)//filtra

    if(productos.length === productosActualizados.length){//verifica si el numero de elemntos en productos es igual a productos actualizados
        console.log("producto no encontrado");
        return
    }
    escribirProducto(productosActualizados);// guardar el array filtrado
    console.log(`producto con ID ${id} eliminado`) // el producto eliminado
}
// agregarProducto("telefono", 500000);
// agregarProducto("portatil", 23000);
// agregarProducto("audifonos", 12000);
// listarProductos();//listar todos los producto
// actualizarProducto(1731463675538, "microfono", 60000)//intenta actualizar  el producto con ID 1 (si existe)
    eliminarProducto(1731463675542);
    listarProductos();//listar todos los producto

    /*
    usa el módulo fs para administrar un directorio y realizar operaciones avanzadas en archivos de texto, 
    como leer y copiar todos los archivos que contienen una palabra específica en una carpeta separada. 
    Esta operación es útil en casos como la organización de archivos o la clasificación de documentos 
    que contienen ciertas palabras clave.
    */
//    // Importa el módulo 'fs' para trabajar con el sistema de archivos
// const fs = require('fs');
// // Importa el módulo 'path' para manejar rutas de archivos de manera segura
// const path = require('path');

// // Define la palabra que queremos buscar dentro de los archivos
// const palabraClave = 'importante';

// // Define la carpeta origen donde se encuentran los archivos a revisar
// const carpetaOrigen = path.join(__dirname, 'archivos');

// // Define la carpeta destino donde se copiarán los archivos que contengan la palabra clave
// const carpetaDestino = path.join(__dirname, 'contienePalabra');

// // Verifica si la carpeta destino existe, y si no, la crea
// if (!fs.existsSync(carpetaDestino)) {
//     fs.mkdirSync(carpetaDestino);
// }

// // Lee el contenido de la carpeta origen
// fs.readdir(carpetaOrigen, (err, archivos) => {
//     if (err) {
//         return console.error("Error al leer la carpeta origen:", err.message);
//     }

//     // Itera sobre cada archivo encontrado en la carpeta origen
//     archivos.forEach(archivo => {
//         const rutaArchivo = path.join(carpetaOrigen, archivo); // Obtiene la ruta completa del archivo

//         // Verifica si es un archivo y no una subcarpeta
//         fs.stat(rutaArchivo, (err, stats) => {
//             if (err) {
//                 return console.error("Error al obtener estadísticas del archivo:", err.message);
//             }

//             // Solo procesa el archivo si es un archivo regular
//             if (stats.isFile()) {
//                 // Lee el contenido del archivo
//                 fs.readFile(rutaArchivo, 'utf8', (err, contenido) => {
//                     if (err) {
//                         return console.error("Error al leer el archivo:", err.message);
//                     }

//                     // Verifica si el contenido del archivo contiene la palabra clave
//                     if (contenido.includes(palabraClave)) {
//                         const rutaDestino = path.join(carpetaDestino, archivo); // Define la ruta de destino del archivo

//                         // Copia el archivo a la carpeta destino
//                         fs.copyFile(rutaArchivo, rutaDestino, (err) => {
//                             if (err) {
//                                 return console.error("Error al copiar el archivo:", err.message);
//                             }
//                             console.log(`Archivo "${archivo}" copiado a "${carpetaDestino}" porque contiene la palabra "${palabraClave}".`);
//                         });
//                     }
//                 });
//             }
//         });
//     });
// });
