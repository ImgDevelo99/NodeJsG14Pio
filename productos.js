const inventario = [];

function agregarProducto(nombre, precio){
    const producto = {nombre, precio};
    inventario.push(producto);
    return `producto ${nombre} agregado con exito`;
}

function listarProducto() {
    return inventario.length ? inventario: "no hay productos en el inventario";
}

// function listarProducto() {
//     if(inventario.length > 0){
//         return inventario;
//     }else{
//         return "no hay productos en el inventario";
//     }
// }
