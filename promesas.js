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
function obtenerProducto(productoId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("obtener detalle del producto");
            const producto = {id: productoId, nombre: "portatil", precio: 15000}
            if(producto){
                resolve(producto);
            }else{
                reject("producto no encontrado")
            }

        }, 5000);
    });
}
function verificarStock(producto){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
        console.log("verificar producto:",producto.nombre)
        const enStock = Math.random() > 0.5
        if(enStock){
            resolve("producto en stock")
        }else{
            reject("producto fuera de stock")
        }
    },3000);
});
}

function confirmarCompra(producto) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("confirmar compra del producto",producto.nombre)
            resolve("compra con exito");
        }, 8000);
});
}

function realizarCompra(productoId){
    obtenerProducto(productoId)
    .then((producto) =>{
        return verificarStock(producto).then(() => producto)
    })
    .then((producto) => {
        return confirmarCompra(producto);
    })
    .catch((mensaje) =>{
        console.log(mensaje);

    })
    .catch((error) => {
        console.error("error durante la comrpa",error);
    })

    .finally(() => {
        console.log("proceso completado")
    });
}
realizarCompra(1)





