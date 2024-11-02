/**
es una sintaxis que permite extraer valores especificos de un onjeto o de una funcion a variables de rapida directa y
organizada. permite que el codigo sea mas legible y reduce la necesidad de acceder repetidamente a una propiedad
de un objeto 
*/
const usuarios = {
    nombre: "sara",
    edad: 23,
    ciudad: "Cali",
    telefono: 1233244
}

// const nombre = ususarios.nombre;
// const edad = ususarios.edad;
// const ciudad = ususarios.ciudad

// console.log(nombre);
// console.log(edad);
// console.log(ciudad);

//-----------desestructuracion objetos----------------------

//const {propiedad1, propiedad2} = objeto;

// const {nombre, edad, ciudad } = usuarios;

// console.log(nombre);
// console.log(edad);
// console.log(ciudad);

// const {nombre: nombreUsuario, ciudad: lugarResidencia} = usuarios;
// console.log(nombreUsuario);
// console.log(lugarResidencia);

//------------desestructurar funciones---------------------------

// function mostrarUsuario({nombre, edad}){
//     console.log(`Nombre: ${nombre}, Edad: ${edad} `);
// }

// mostrarUsuario(usuarios);

// const {nombre, pais = "Colombia" } = usuarios;
// console.log(pais);

//-------------------------------------------------
// const persona = {
//     nombre: "Ana",
//     edad : 30,
//     Ciudad: "Cali",
//     profesion: "desarrollador",
//     contacto: {
//         email: "ana@gmail.com",
//         telefono: "34243343"
//     } 
// };

// const {nombre, edad, profesion, contacto: {email, telefono}} = persona;

//------------------------------------------------

const libro = {
    titulo: "cien años de soledad",
    autor: "Gabriel Garcia",
    fechaPublicacion: 1967,
    editorial: "Sudamericana",
    genero: "novela" 
};

function mostrarResumen({titulo, autor}){
    console.log(`Titulo:  ${titulo}`);
    console.log(`Autor:  ${autor}`);
}

function mostrarDetalles({fechaPublicacion, editorial, genero}){
    console.log(`Año de publicacion:  ${fechaPublicacion}`);
    console.log(`Editorial:  ${editorial}`);
    console.log(`Genero:  ${genero}`);
}

mostrarResumen(libro);
mostrarDetalles(libro);

/* Tarea 1, 
estás desarrollando un sistema de gestión para una clínica veterinaria. 
Cada paciente (mascota) tiene una ficha de registro con datos como el nombre, la especie, la edad, el nombre del dueño,
y un número de contacto. La clínica necesita dos funciones:

mostrarFichaBasica: Que muestre solo el nombre de la mascota y su especie.
mostrarFichaCompleta: Que muestre los detalles completos de la ficha. 

tarea 2: realizar dos ejercicios utilizando promesas y Async/Await y exxplicarlo en la proxima clase
que seria el dia martes 5 de noviembre del 2024 a las 7:45 pm por este mismo lugar.

*/

