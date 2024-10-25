function saludar(nombre){
    return "bienvenido" + nombre;    
}

console.log(saludar("Carlos"));
//----------------------------------------------

//funciones anonimas
let saludo = function(nombre){
    return "Benvenidos" + nombre;
}

console.log(saludo("Carlos"));
//-----------------------------------------------

//funcion flecha () => {}
let saludo2 = nombre => "Bienvenido" + nombre;  


console.log(saludo2("Carlos"));
//----------------------------------------
const multiplicar = (a,b) => {
    return a * b;
}
console.log(multiplicar(5,3));


