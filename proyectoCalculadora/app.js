// //mkdir nombre_del_proyecto
// //cd nombre_del_proyecto
// // npm init -y
//package.json  agregamos en script "start": app.js,
//"type": "module",


import {sumar, restar, multiplicar, dividir} from './calculadora.js';

import calcular from './calculadora.js';

console.log(`El resultado de la suma: ${sumar(10,5)}`);
console.log(`El resultado de la resta: ${restar(8,3)} `);
console.log(`El resultado de la multiplicacion: ${multiplicar(5,5)}`);

try {
    console.log(`El resultado de la division: ${dividir(10,5)}`);
    
} catch (error) {
    console.log(error.message);    
}

console.log(`resultado de calcular (suma): ${calcular('sumar', 24,10)}`);
console.log(`resultado de calcular (resta): ${calcular('restar', 67,7)}`);

