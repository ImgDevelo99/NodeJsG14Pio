// const { response } = require("express");

//URL API
const API_URL = 'http://localhost:3000/usuarios';

//seleccionar los elementos del DOM
let editingUserID = null //se almacena el id que se esta editando

//funcion para cargar o mostrar esos usuarios
async function loadUser() {// cargar la lista de usuarios desde el servidor
    try {
        const response = await fetch(API_URL);// una solicitud GET a la url, await asegura que se espere la respuesta
        const usuarios = await response.json();
        
        const userlist = document.getElementById('user-list');
        userlist.innerHTML = ''; // limpiar la tabla

        usuarios.forEach(usuario => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${usuario.id}</td>
                <td>${usuario.nombre}</td>
                <td>${usuario.rol}</td>
                <td>
                    <button onclick="editarUser(${usuario.id})">Editar</button>
                    <button onclick="deleteUser(${usuario.id})">Eliminar</button>
                </td>
                `;

                userlist.appendChild(row);
        });
        
    } catch (error) {
        alert('Error al cargar usuarios' + error.message);
        
    }
}
// Funcion para agregar o actualizar usuarios
async function saveUser(event) {
    event.preventDefault();//preveiene el envio del formulario

    const id = document.getElementById('user-id').value;
    const nombre = document.getElementById('user-name').value;
    const rol = document.getElementById('user-role').value;

    if(!id || !nombre || !rol){
        alert('por favor, complete todos los campos.');
        return;
    }

    const usuario = {id: parseInt(id), nombre, rol};// creamos un objeto

    try {
        if(editingUserID){
            const response = await fetch(`${API_URL}/${editingUserID}`,{ //realizando solicitud a la API
                method: 'PUT',
                headers: { 'Content-Type': 'application/json'},//definiendo el tipo de contenido com
                body: JSON.stringify(usuario)// se convierte el objeto en una cadena
            });

            if(!response.ok){
                const error = await response.json();
                throw new Error(error.mensaje)
            }
            alert('usuario actualizado correctamente');
            editingUserID = null;
        }else {
            //modo agregar
            const response = await fetch(API_URL,{ //realizando solicitud a la API
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},//definiendo el tipo de contenido com
                body: JSON.stringify(usuario)// se convierte el objeto en una cadena
            });

            
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.mensaje)
            }
            alert('usuario creado correctamente');
        }
        loadUser();//recarga la lista de usuario
        
    } catch (error) {
        alert('error al cargar el usuario:' + error.message);
    }

    document.getElementById('user-form').reset();
}

//funcion para editar usuario
function editarUser(id){
    const usuario = Array.from(document.querySelectorAll('#user-list tr')).find(row => {
        return parseInt(row.children[0].textContent) === id;
    });

    if(usuario){
        document.getElementById('user-id').value = usuario.children[0].textContent;
        document.getElementById('user-name').value = usuario.children[1].textContent;
        document.getElementById('user-role').value = usuario.children[2].textContent;

        editingUserID = id; // activa el modo edicion
    }
}
// funcion eliminar
async function deleteUser(id){
    if(!confirm('Esta seguro que desea eliminar al usuario?')) return;

    try {
        const response =  await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });

        if(!response.ok){
            const error = await response.json();
            throw new Error(error.mensaje)
        }
        alert('usuario eliminado correctamente');
        loadUser();
    } catch (error) {
        alert('Error al eliminar el usuario:', error.message);
        
    }
    
}
document.getElementById('user-form').addEventListener('submit', saveUser);
loadUser();

//CORS = es un mecanismo de seguridad implementada en los navegadores
// mipagina.com
// APi = api.externaserver.com
