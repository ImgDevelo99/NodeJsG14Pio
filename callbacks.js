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
// const usuariosAutorizados  = [
//     {id:1, nombre: "juan", autorizado: true},
//     {id:2, nombre: "Sandra", autorizado: false},
//     {id:3, nombre: "Carlos", autorizado: true}
// ];

// // funcion para verificar si el usuario esta autorizado
// function verificarAutorizacion(idUsuario, callback){
//     console.log(`verificando autorizacion para el usuario ${idUsuario}...`);

//     setTimeout(() => {
//         const usuario = usuariosAutorizados.find((usuario) => usuario.id === idUsuario); //

//         if(!usuario){
//             const error = new Error("Usuario no encontrado");
//             return callback(error);
//         }

//         if(!usuario.autorizado){
//             const error = new Error("El usuario no autorizado para enviar mensajes");
//             return callback(error);
//         }

//         callback(null, usuario);
        
//     }, 5000);
// }

// // funcion de envio de mensajes
// function enviarMensaje(idUsuario, mensaje, callback){
//     verificarAutorizacion(idUsuario, (error, usuario) => {
//         if(error){
//             return callback(error);
//         }

//         console.log(`enviando mensaje a ${usuario.nombre}: ${mensaje}`);

//         setTimeout(() => {
//             callback(null, `mensaje enviado a ${usuario.nombre}: ${mensaje}`)
            
//         }, 2000);

//     });
// }

// //ejecucion del mensaje
// enviarMensaje(2, "hola este mensaje es de prueba ", (err, resultado) => {// llamar la funcion callback que maneja el resultado
//     if(err){//comprueba si hubo error, imprime el mensaje de error
//         return console.log(err.message);
//     }
//     console.log(resultado)// imprime resultado exito en consola
// } );

/*
3. simula un proceso de descarga de archivos desde internet, con tres pasos: verificar la conexión, 
 descargar el archivo y notificar el final de la descarga.

4.  Enunciado del Ejercicio
Sistema de Gestión de Tareas
Imagina que estás desarrollando un sistema simple de gestión de tareas que permite a los usuarios agregar, listar y completar tareas. Implementa las siguientes funciones utilizando callbacks:

Agregar Tarea: Crea una función agregarTarea(titulo, callback) que acepte el título de una nueva tarea y un callback. La función debe simular la adición de la tarea a una lista (puedes usar un array como base de datos) y llamar al callback con un mensaje indicando que la tarea se ha agregado correctamente. Si el título de la tarea está vacío, el callback debe recibir un error.

Listar Tareas: Crea una función listarTareas(callback) que acepte un callback. Esta función debe simular la obtención de la lista de tareas y llamará al callback con la lista de tareas. Si no hay tareas, debe llamar al callback con un mensaje indicando que no hay tareas disponibles.

Completar Tarea: Crea una función completarTarea(titulo, callback) que acepte el título de la tarea a completar y un callback. Esta función debe buscar la tarea en la lista y marcarla como completada. Si la tarea no se encuentra, el callback debe recibir un error; si se completa con éxito, debe llamar al callback con un mensaje de confirmación.

Ejemplo de Uso:
Agregar tareas a la lista.
Listar las tareas existentes.
Completar una tarea existente y listar nuevamente las tareas.
*/

// Simulamos una base de datos de tareas
let tareas = [];

// Función para agregar una tarea
function agregarTarea(titulo, callback) {
    if (!titulo) {
        const error = new Error("El título de la tarea no puede estar vacío.");
        return callback(error);
    }

    const nuevaTarea = { titulo, completada: false };
    tareas.push(nuevaTarea);
    callback(null, `Tarea agregada: "${titulo}"`);
}

// Función para listar las tareas
function listarTareas(callback) {
    if (tareas.length === 0) {
        return callback("No hay tareas disponibles.");
    }
    callback(null, tareas);
}

// Función para completar una tarea
function completarTarea(titulo, callback) {
    const tarea = tareas.find(tarea => tarea.titulo === titulo);
    if (!tarea) {
        const error = new Error(`Tarea "${titulo}" no encontrada.`);
        return callback(error);
    }
    
    tarea.completada = true;
    callback(null, `Tarea completada: "${titulo}"`);
}

// Ejemplo de uso

// Agregamos algunas tareas
agregarTarea("Aprender JavaScript", (err, mensaje) => {
    if (err) {
        return console.log(err.message);
    }
    console.log(mensaje);

    // Listar tareas después de agregar
    listarTareas((err, lista) => {
        if (err) {
            return console.log(err);
        }
        console.log("Lista de tareas:", lista);

        // Completar una tarea
        completarTarea("Aprender JavaScript", (err, mensaje) => {
            if (err) {
                return console.log(err.message);
            }
            console.log(mensaje);

            // Listar tareas nuevamente
            listarTareas((err, lista) => {
                if (err) {
                    return console.log(err);
                }
                console.log("Lista de tareas después de completar:", lista);
            });
        });
    });
});

// Intentar agregar una tarea sin título
agregarTarea("", (err, mensaje) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(mensaje);
    }
});

// Intentar completar una tarea que no existe
completarTarea("Tarea que no existe", (err, mensaje) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(mensaje);
    }
});
