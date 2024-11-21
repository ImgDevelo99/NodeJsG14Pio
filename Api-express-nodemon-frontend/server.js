// // Importa los módulos necesarios
// const express = require('express');
// const cors = require('cors'); // Importa el módulo CORS

// // Crea una instancia de la aplicación
// const app = express();

// // Middleware para habilitar CORS
// app.use(cors());

// // Middleware para procesar datos JSON
// app.use(express.json());

// // Datos en memoria para manejar usuarios
// let usuarios = [];

// // Ruta GET: Obtiene todos los usuarios
// app.get('/usuarios', (req, res) => {
//   res.json(usuarios);
// });

// // Ruta POST: Agrega un nuevo usuario
// app.post('/usuarios', (req, res) => {
//   const nuevoUsuario = req.body;
//   if (!nuevoUsuario.id || !nuevoUsuario.nombre || !nuevoUsuario.rol) {
//     return res.status(400).json({ mensaje: 'El usuario debe tener id, nombre y rol' });
//   }
//   usuarios.push(nuevoUsuario);
//   res.json({ mensaje: 'Usuario añadido correctamente', usuario: nuevoUsuario });
// });

// // Ruta PUT: Actualiza un usuario por ID
// app.put('/usuarios/:id', (req, res) => {
//   const idUsuario = parseInt(req.params.id);
//   const usuarioActualizado = req.body;

//   const indice = usuarios.findIndex(u => u.id === idUsuario);
//   if (indice === -1) {
//     return res.status(404).json({ mensaje: 'Usuario no encontrado' });
//   }

//   usuarios[indice] = usuarioActualizado;
//   res.json({ mensaje: 'Usuario actualizado correctamente', usuario: usuarioActualizado });
// });

// // Ruta DELETE: Elimina un usuario por ID
// app.delete('/usuarios/:id', (req, res) => {
//   const idUsuario = parseInt(req.params.id);
//   const indice = usuarios.findIndex(u => u.id === idUsuario);

//   if (indice === -1) {
//     return res.status(404).json({ mensaje: 'Usuario no encontrado' });
//   }

//   usuarios.splice(indice, 1);
//   res.json({ mensaje: 'Usuario eliminado correctamente' });
// });

// // Inicia el servidor
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
// });

const express = require('express'); // Importa el framework Express para crear la API REST.
const http = require('http'); // Módulo HTTP nativo de Node.js para crear el servidor.
const WebSocket = require('ws'); // Importa el módulo 'ws' para usar WebSocket.
const bodyParser = require('body-parser'); // Middleware para analizar el cuerpo de las solicitudes HTTP.
const cors = require('cors'); // Middleware para permitir solicitudes desde otros dominios.

const app = express(); // Crea una instancia de Express.
const server = http.createServer(app); // Crea un servidor HTTP usando Express.
const wss = new WebSocket.Server({ server }); // Crea un servidor WebSocket conectado al servidor HTTP.

let usuarios = []; // Array en memoria para almacenar los usuarios.

app.use(cors()); // Permite solicitudes de origen cruzado.
app.use(bodyParser.json()); // Permite analizar cuerpos JSON en las solicitudes.

app.get('/usuarios', (req, res) => {
  res.json(usuarios); // Devuelve todos los usuarios como un JSON.
});

app.post('/usuarios', (req, res) => {
  const usuario = req.body; // Obtiene el nuevo usuario del cuerpo de la solicitud.
  usuarios.push(usuario); // Lo agrega al array de usuarios.
  broadcast({ action: 'add', usuario }); // Envía un mensaje a todos los clientes WebSocket.
  res.status(201).json(usuario); // Devuelve el usuario creado con un código 201.
});

app.put('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id); // Obtiene el ID del parámetro de la ruta y lo convierte a número.
  const index = usuarios.findIndex(u => u.id === id); // Encuentra el índice del usuario con ese ID.

  if (index === -1) {
    return res.status(404).json({ mensaje: 'Usuario no encontrado' }); // Devuelve un error si el usuario no existe.
  }

  usuarios[index] = req.body; // Actualiza el usuario en el array.
  broadcast({ action: 'update', usuario: usuarios[index] }); // Notifica a los clientes WebSocket.
  res.json(usuarios[index]); // Devuelve el usuario actualizado.
});

app.delete('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id); // Obtiene el ID del parámetro de la ruta.
  const index = usuarios.findIndex(u => u.id === id); // Encuentra el índice del usuario con ese ID.

  if (index === -1) {
    return res.status(404).json({ mensaje: 'Usuario no encontrado' }); // Devuelve un error si el usuario no existe.
  }

  const usuarioEliminado = usuarios.splice(index, 1)[0]; // Elimina el usuario del array.
  broadcast({ action: 'delete', usuario: usuarioEliminado }); // Notifica a los clientes WebSocket.
  res.json(usuarioEliminado); // Devuelve el usuario eliminado.
});

// Manejo de conexiones WebSocket
wss.on('connection', (ws) => {
  console.log('Cliente conectado');

  ws.on('close', () => {
    console.log('Cliente desconectado');
  });
});

// Función para enviar mensajes a todos los clientes WebSocket
function broadcast(data) {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data)); // Envía los datos como JSON.
    }
  });
}

const PORT = 3000; // Puerto en el que se ejecutará el servidor.
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`); // Mensaje de confirmación.
});
