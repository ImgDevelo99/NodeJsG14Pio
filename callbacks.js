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
// const booksDb = [
//     {
//         id: 1,
//         title: "El caballero de la armadura"
//     },
//     {
//         id: 2,
//         title: "etica para amador"
//     },
//     {
//         id: 3,
//         title: "ensayo sobre la seguera"
//     }
// ];

// function getBookById(id, callback){
//     const book = booksDb.find((book) => book.id === id );
//     if(!book){
//         const error = new Error();
//         error.message = " Libro no encontrado!!";
//         return callback(error);
//     }
//     callback(null, book);
// }
// getBookById(2, (err, book) => {
//     if(err){
//         return console.log(err.message);
//     }
//     return console.log(book);
// });

//-------------------------------------------
/*
1. simulacion para procesar un pedido en una cafeteria. una vez que el pedido este listo, llamar una funcion callback
para notificar al cliente que puede recogerlo.

2.simulacion de envio de mensaje de texto. que verifique si el usuario esta autorizado antes de enviar el mensaje.
   utilizar callback para manejar el resultado de las autorizaciones del envio del mensaje 
*/
const usuariosAutorizados  = [
    {id:1, nombre: "juan", autorizado: true},
    {id:2, nombre: "Sandra", autorizado: false},
    {id:3, nombre: "Carlos", autorizado: true}
];

// funcion para verificar si el usuario esta autorizado
function verificarAutorizacion(idUsuario, callback){
    console.log(`verificando autorizacion para el usuario ${idUsuario}...`);

    setTimeout(() => {
        const usuario = usuariosAutorizados.find((usuario) => usuario.id === idUsuario); //

        if(!usuario){
            const error = new Error("Usuario no encontrado");
            return callback(error);
        }

        if(!usuario.autorizado){
            const error = new Error("El usuario no autorizado para enviar mensajes");
            return callback(error);
        }

        callback(null, usuario);
        
    }, 5000);
}

// funcion de envio de mensajes
function enviarMensaje(idUsuario, mensaje, callback){
    verificarAutorizacion(idUsuario, (error, usuario) => {
        if(error){
            return callback(error);
        }

        console.log(`enviando mensaje a ${usuario.nombre}: ${mensaje}`);

        setTimeout(() => {
            callback(null, `mensaje enviado a ${usuario.nombre}: ${mensaje}`)
            
        }, 2000);

    });
}

//ejecucion del mensaje
enviarMensaje(2, "hola este mensaje es de prueba ", (err, resultado) => {// llamar la funcion callback que maneja el resultado
    if(err){//comprueba si hubo error, imprime el mensaje de error
        return console.log(err.message);
    }
    console.log(resultado)// imprime resultado exito en consola
} );

/*
3. simula un proceso de descarga de archivos desde internet, con tres pasos: verificar la conexión, 
 descargar el archivo y notificar el final de la descarga.

4. 
*/

