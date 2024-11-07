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
function eliminarProducto(nombre){
    //busca el indice del producto en el arreglo inventario
    const index = inventario.findIndex((producto) => producto.nombre === nombre);
    if(index !== -1){//verifica si se encontro el producto (si el indice es diferente a -1)
        inventario.splice(index, 1);//si el producto existelo elimina inventario
        return `Producto ${nombre} eliminado con exito`;
    }
    return `producto ${nombre} no encontrado`;
}
//exportar las funciones
module.exports = {agregarProducto, eliminarProducto, listarProducto};
