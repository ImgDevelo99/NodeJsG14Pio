//sincronica-----------------------------------
// console.log("inicio del programa");// 1 tarea

// function tareaSincronica(){
//     for(let i = 1; i<10; i++){
//         console.log(`proceso ${i}`);
//     }
// }

// tareaSincronica(); // 2 tarea

// console.log("fin del programa")// 3 tarea

//------------asincrono-------------------
console.log("inicio del programa");// 1 tarea

function tareaAsincrona(){
    setTimeout(() =>{
        console.log("proceso asincrono completado");//3 tarea
    },5000);
}
tareaAsincrona();

console.log("fin del programa")// 2 tarea

