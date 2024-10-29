//Node.js es un entorno de ejecucion js del lado del servidor.
//1. desarrollo de aplicaciones web
//2. ApiResrFull
//------------------------------------------------------
//una promesa es un objeto, representa la finalizacion de operaciones asincronas y su resultado.

//estado promesas:
//pading(pendiente):las operaciones asincronas no han finalizado
//fullfiled(cumplida): las operaciones han sido completadas con exito
//rejected(rechazada) la operacion fallo y se devuelve un error

//Metodos principales:
//then(): se ejecuta cuando la promesa se cumpla.
//catch(): se ejecuta cuando la promesa es rechazada.
//finally():se ejecuta cuando la promesa a sido resuelta(cumplida o rechazada).

// function obtenerUsuario() {

//     return new Promise((resolve, reject) => {
//         //se simula un aoperacion con set
//         setTimeout(() => {
//             const exito = true; //cambiar a false para probar un rechazo
//             if(exito){
//                 resolve({nombre: "juan", edad: 25}); //let persona = {nombre : "juan", edad : 25}

//             }else{
//                 reject("error al obtener el usuario");
//             }
            
//         }, 3000);//simula 3 segundos de espera
        
//     });
// }

// obtenerUsuario() //llamo la funcion
// .then((usuario) => {//
//     console.log("usuario obtenido:",usuario);
// })
// .catch((error) => {
//     console.error(error)
// })
// .finally(() => {
//     console.log("operacion completa exitosa");
// });

//asincronismo : multiples tareas al mismo tiempo sin bloquear ningun flujo del programa
// function obtenerProducto(productoId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("obtener detalle del producto");
//             const producto = {id: productoId, nombre: "portatil", precio: 15000}
//             if(producto){
//                 resolve(producto);
//             }else{
//                 reject("producto no encontrado")
//             }

//         }, 5000);// 5 segundos
//     });
// }
// function verificarStock(producto){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
            
//         console.log("verificar producto:",producto.nombre)
//         const enStock = Math.random() > 0.5
//         if(enStock){
//             resolve("producto en stock")
//         }else{
//             reject("producto fuera de stock")
//         }
//     },3000);
// });
// }

// function confirmarCompra(producto) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("confirmar compra del producto",producto.nombre)
//             resolve("compra con exito");
//         }, 8000);
// });
// }

// function realizarCompra(productoId){
//     obtenerProducto(productoId)
//     .then((producto) =>{
//         return verificarStock(producto).then(() => producto)
//     })
//     .then((producto) => {
//         return confirmarCompra(producto);
//     })
//     .catch((mensaje) =>{
//         console.log(mensaje);

//     })
//     .catch((error) => {
//         console.error("error durante la comrpa",error);
//     })

//     .finally(() => {
//         console.log("proceso completado")
//     });
// }
// realizarCompra(1)

//----------------------------------------------------------------------------
// console.log("inicio programa");//-----tarea 1
// function prepararComida(pedido){
//     return new Promise((resolve, reject) => {
//         console.log("preparando el pedido.......");
//         setTimeout(() => {o el usuario ingresa el tít
//            if(pedido === "pizza"){
//                 resolve("pedido esta listo");
//             }else{
//                 reject("lo siento no tenemos el pedido");
//             }
            
            
//         }, 10000);
//     });
// }
// //consumir la promesa
// prepararComida("pizza")
//     .then((mensajeExitoso)=> {
//         console.log(mensajeExitoso);  // pedido exitoso // tarea 5
//     })
//     .catch((error) => {
//         console.log(error);  // hay un error en el pedido
//     })
//     .finally(() => {
//         console.log("preparacion completa");
//     });
//     console.log("final programa"); //--- tarea2
//     console.log("se ejecuto otra funcion programa");//.---tarea 3
//     console.log("se ejecuto otra funcion programa");// tarea 4

    //-------------------------------------------------------
    /*Enunciado:
    Simulación de Préstamo de Libros en Línea
    
    Eres desarrollador de una plataforma de biblioteca en línea. El sistema necesita ofrecer las siguientes funcionalidades:
    
    Buscar un libro por título: Cuandulo de un libro, el sistema debe buscar en la base de datos de la biblioteca.
     Este proceso debe simularse con una promesa que tarde unos segundos en resolverse.
    
    Verificar disponibilidad del libro: Después de encontrar el libro, el sistema debe verificar si está disponible para préstamo.
     Esto también debe realizarse de forma asíncrona, con una probabilidad del 50% de que el libro esté disponible o no.
    
    Realizar el préstamo: Si el libro está disponible, el sistema procederá a realizar el préstamo. 
    Esta operación debe confirmarse después de unos segundos, simulando que el sistema está preparando el préstamo del libro.
    
    Manejo de errores: Si el libro no se encuentra en la biblioteca o no está disponible, 
    el sistema debe mostrar un mensaje de error específico.
    
    Mensaje final: Independientemente de si el préstamo fue exitoso o no,
     el sistema debe mostrar un mensaje indicando que el proceso de préstamo ha finalizado.*/

//buscar libro------------------------------------------------
function buscarLibro(titulo){
    return new Promise((resolve, reject) => {
        console.log(`Buscar el libro ${titulo}...`);

        setTimeout(() => {
            const librosDisponibles = ["javascript", "Nodejs", "mongoDB", "react"];
            if(librosDisponibles.includes(titulo)){
                resolve(titulo);
            }else{
                reject(`lo siento. el libro ${titulo} no se encuentra en la biblioteca`);
            }
            
        }, 3000);
    })
}
//verificar disponibilidad-----------------------------------
function verificarDisponibilidad(libro){
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            
        const disponible = Math.random() > 0.5; //50% de probabilidad
        if(disponible){
            resolve(libro);
        }else{
            reject(`lo siento, el libro ${titulo} no esta disponible para prestamo`);
        }
    }, 2000);
});
}

//prestamo del libro----------------------------------------
function realizarPrestamo(libro){
    return new Promise((resolve, reject) => {
        console.log(`Realizando prestamo del libro ${libro}....`);

        setTimeout(() => {
        resolve(`Prestamo completado exitosamente para el libro ${libro}.`) ;
        }, 1000);
    });
}

//-------Gestionar prestamo--------------
function gestionarPrestamo(titulo){
    buscarLibro(titulo)
    .then((libro) => {
        return verificarDisponibilidad(libro);
    })

    .then((librosDisponibles) => {
        return realizarPrestamo(librosDisponibles);
    })

    .then((mensajeExitoso) => {
        console.log(mensajeExitoso);
    })

    .catch((error) => {
        console.error(error)// captura el error derante el proceso
    })
    
    .finally(() => {
        console.log("proceso de prestamo finalizado");
    });
}

gestionarPrestamo("next");



