/*
es una funcion que se pasa como argumento en otra funcion y se ejecuta despues
de que esa funcion ha completado su tarea. los callbacks ,me permiten controlar el flujo
del programa y se trabaja de manera asincronica.

1. maneja asincronismo.
2. Modularidad.
3. Personalizacion de comportamientos.
*/ 
/*ejemplo: simulacion de una tarea asincronica para descargar un archivo. */

// function descargarArchivo(nombreArchivo, callback ){
//     console.log(`Iniciando la descarga del archivo: ${nombreArchivo}. `);

//     setTimeout(() => {
//         console.log(`Descarga del archivo ${nombreArchivo} completada.`)
//         callback();// llamamos al callback despues de la carga
//     }, 10000);
// }
// // llamar a la funcion y pasar el callback
// descargarArchivo("foto.png", function(){
//     console.log("archivo descargado y listo para usar");
// });

//-------------------------------------------------------------------
const booksDb = [
    {
        id: 1,
        title: "El caballero de la armadura"
    },
    {
        id: 2,
        title: "etica para amador"
    },
    {
        id: 3,
        title: "ensayo sobre la seguera"
    }
];

function getBookById(id, callback){
    const book = booksDb.find((book) => book.id === id );
    if(!book){
        const error = new Error();
        error.message = " Libro no encontrado!!";
        return callback(error);
    }
    callback(null, book);
}
getBookById(2, (err, book) => {
    if(err){
        return console.log(err.message);
    }
    return console.log(book);
});

//-------------------------------------------
/*
simulacion para procesar un pedido en una cafeteria. una vez que el pedido este listo, llamar una funcion callback
para notificar al cliente que puede recogerlo.
*/
