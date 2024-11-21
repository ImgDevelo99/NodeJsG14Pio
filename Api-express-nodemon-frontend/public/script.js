// const API_URL = 'http://localhost:3000/usuarios';

//     let editingUserId = null; // Variable para rastrear si estamos editando

//     // Función para cargar usuarios
//     async function loadUsers() {
//       try {
//         const response = await fetch(API_URL);
//         const usuarios = await response.json();

//         const userList = document.getElementById('user-list');
//         userList.innerHTML = ''; // Limpia la tabla

//         usuarios.forEach(usuario => {
//           const row = document.createElement('tr');

//           row.innerHTML = `
//             <td>${usuario.id}</td>
//             <td>${usuario.nombre}</td>
//             <td>${usuario.rol}</td>
//             <td>
//               <button onclick="editUser(${usuario.id})">Editar</button>
//               <button onclick="deleteUser(${usuario.id})">Eliminar</button>
//             </td>
//           `;

//           userList.appendChild(row);
//         });
//       } catch (error) {
//         alert('Error al cargar usuarios: ' + error.message);
//       }
//     }

//     // Función para agregar o actualizar un usuario
//     async function saveUser(event) {
//       event.preventDefault(); // Previene el envío del formulario

//       const id = document.getElementById('user-id').value;
//       const nombre = document.getElementById('user-name').value;
//       const rol = document.getElementById('user-role').value;

//       if (!id || !nombre || !rol) {
//         alert('Por favor, completa todos los campos.');
//         return;
//       }

//       const usuario = { id: parseInt(id), nombre, rol };

//       try {
//         if (editingUserId) {
//           // Modo edición
//           const response = await fetch(`${API_URL}/${editingUserId}`, {
//             method: 'PUT',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(usuario)
//           });

//           if (!response.ok) {
//             const error = await response.json();
//             throw new Error(error.mensaje);
//           }

//           alert('Usuario actualizado correctamente');
//           editingUserId = null; // Salimos del modo edición
//         } else {
//           // Modo agregar
//           const response = await fetch(API_URL, {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(usuario)
//           });

//           if (!response.ok) {
//             const error = await response.json();
//             throw new Error(error.mensaje);
//           }

//           alert('Usuario guardado correctamente');
//         }

//         loadUsers(); // Recargar la lista de usuarios
//       } catch (error) {
//         alert('Error al guardar el usuario: ' + error.message);
//       }

//       // Limpia los campos del formulario
//       document.getElementById('user-form').reset();
//     }

//     // Función para editar un usuario
//     function editUser(id) {
//       const usuario = Array.from(document.querySelectorAll('#user-list tr')).find(row => {
//         return parseInt(row.children[0].textContent) === id;
//       });

//       if (usuario) {
//         // Rellenar el formulario con los datos del usuario
//         document.getElementById('user-id').value = usuario.children[0].textContent;
//         document.getElementById('user-name').value = usuario.children[1].textContent;
//         document.getElementById('user-role').value = usuario.children[2].textContent;

//         editingUserId = id; // Activar el modo edición
//       }
//     }

//     // Función para eliminar un usuario
//     async function deleteUser(id) {
//       if (!confirm('¿Estás seguro de eliminar este usuario?')) return;

//       try {
//         const response = await fetch(`${API_URL}/${id}`, {
//           method: 'DELETE',
//         });

//         if (!response.ok) {
//           const error = await response.json();
//           throw new Error(error.mensaje);
//         }

//         alert('Usuario eliminado correctamente');
//         loadUsers(); // Recargar la lista de usuarios
//       } catch (error) {
//         alert('Error al eliminar el usuario: ' + error.message);
//       }
//     }

//     // Asociar eventos
//     document.getElementById('user-form').addEventListener('submit', saveUser);
//     // document.getElementById('load-users').addEventListener('click', loadUsers);
//     // Configura la actualización automática cada 5 segundos
// // setInterval(loadUsers, 20000);

// loadUsers(); // Cargar los usuarios directamente al cargar la página
//     // // Cargar usuarios al inicio
//     // window.onload = loadUsers;
//-----------------------------------------------------------------------------------------------------------------
const API_URL = 'http://localhost:3000/usuarios';
const WS_URL = 'ws://localhost:3000'; // Dirección del WebSocket

let editingUserId = null; // Variable para rastrear si estamos editando
let socket; // Variable para la conexión WebSocket

// Función para inicializar WebSocket
function initWebSocket() {
  socket = new WebSocket(WS_URL);

  // Evento: conexión abierta
  socket.addEventListener('open', () => {
    console.log('Conectado al servidor WebSocket');
  });

  // Evento: mensaje recibido
  socket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);

    switch (message.action) {
      case 'add':
        addUserToTable(message.usuario);
        break;
      case 'update':
        updateUserInTable(message.usuario);
        break;
      case 'delete':
        removeUserFromTable(message.usuario.id);
        break;
    }
  });

  // Evento: conexión cerrada
  socket.addEventListener('close', () => {
    console.log('Desconectado del servidor WebSocket. Intentando reconectar...');
    setTimeout(initWebSocket, 5000); // Reintenta la conexión después de 5 segundos
  });
}

// Función para cargar usuarios inicialmente
async function loadUsers() {
  try {
    const response = await fetch(API_URL);
    const usuarios = await response.json();

    const userList = document.getElementById('user-list');
    userList.innerHTML = ''; // Limpia la tabla

    usuarios.forEach(addUserToTable); // Agrega cada usuario a la tabla
  } catch (error) {
    alert('Error al cargar usuarios: ' + error.message);
  }
}

// Función para agregar un usuario a la tabla
function addUserToTable(usuario) {
  const userList = document.getElementById('user-list');
  const row = document.createElement('tr');

  row.setAttribute('data-id', usuario.id); // Para identificar la fila
  row.innerHTML = `
    <td>${usuario.id}</td>
    <td>${usuario.nombre}</td>
    <td>${usuario.rol}</td>
    <td>
      <button onclick="editUser(${usuario.id})">Editar</button>
      <button onclick="deleteUser(${usuario.id})">Eliminar</button>
    </td>
  `;

  userList.appendChild(row);
}

// Función para actualizar un usuario en la tabla
function updateUserInTable(usuario) {
  const row = document.querySelector(`tr[data-id="${usuario.id}"]`);
  if (row) {
    row.children[1].textContent = usuario.nombre;
    row.children[2].textContent = usuario.rol;
  }
}

// Función para eliminar un usuario de la tabla
function removeUserFromTable(id) {
  const row = document.querySelector(`tr[data-id="${id}"]`);
  if (row) {
    row.remove();
  }
}

// Función para agregar o actualizar un usuario
async function saveUser(event) {
  event.preventDefault(); // Previene el envío del formulario

  const id = document.getElementById('user-id').value;
  const nombre = document.getElementById('user-name').value;
  const rol = document.getElementById('user-role').value;

  if (!id || !nombre || !rol) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  const usuario = { id: parseInt(id), nombre, rol };

  try {
    if (editingUserId) {
      // Modo edición
      const response = await fetch(`${API_URL}/${editingUserId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.mensaje);
      }

      alert('Usuario actualizado correctamente');
      editingUserId = null; // Salimos del modo edición
    } else {
      // Modo agregar
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.mensaje);
      }

      alert('Usuario guardado correctamente');
    }

    document.getElementById('user-form').reset();
  } catch (error) {
    alert('Error al guardar el usuario: ' + error.message);
  }
}

// Función para editar un usuario
function editUser(id) {
  const usuario = Array.from(document.querySelectorAll('#user-list tr')).find(
    (row) => parseInt(row.children[0].textContent) === id
  );

  if (usuario) {
    // Rellenar el formulario con los datos del usuario
    document.getElementById('user-id').value = usuario.children[0].textContent;
    document.getElementById('user-name').value = usuario.children[1].textContent;
    document.getElementById('user-role').value = usuario.children[2].textContent;

    editingUserId = id; // Activar el modo edición
  }
}

// Función para eliminar un usuario
async function deleteUser(id) {
  if (!confirm('¿Estás seguro de eliminar este usuario?')) return;

  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.mensaje);
    }

    alert('Usuario eliminado correctamente');
  } catch (error) {
    alert('Error al eliminar el usuario: ' + error.message);
  }
}

// Asociar eventos
document.getElementById('user-form').addEventListener('submit', saveUser);

// Inicializar WebSocket y cargar usuarios
initWebSocket();
loadUsers();
