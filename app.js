// const calcular = require("./calculadora");

// const resultadoSuma = calcular.sumar(5, 10);
// console.log(`El resultado de la suma: ${resultadoSuma}`);

// const resultadoMulti = calcular.multiplicar(5, 5);
// console.log(`El resultado de la multiplicacion es: ${resultadoMulti}`)
// crear un modulo para gestionar operaciones deproductos en una tienda.


//importar las funciones de productos.js desestructurar
const {agregarProducto, eliminarProducto, listarProducto} = require('./productos');

//usamos la funcion agregarProducto
console.log(agregarProducto("laptop lenovo", 150000));
console.log(agregarProducto("Pantalla", 2500000));
console.log(agregarProducto("Mouse", 300));
console.log(agregarProducto("audifonos", 12000));

//llamamos la funcion listarProducto
console.log("Inventario actual: ",listarProducto());

//usamos la funcion eliminar
console.log(eliminarProducto("Mouse"));

console.log("Inventario actual despues de eliminar un producto: ",listarProducto());

