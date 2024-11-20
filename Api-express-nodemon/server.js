// Importa el módulo Express
const express = require('express');
const cors = require('cors');

// Crea una instancia de la aplicación Express
const app = express();

app.use(cors());
// Define el puerto en el que el servidor va a escuchar
const PORT = 3000;

// Middleware para procesar datos JSON en las peticiones
app.use(express.json()); // Permite recibir y procesar datos JSON

// Base de datos simulada (en memoria)
let usuarios = []; // Arreglo para almacenar usuarios

// Ruta GET: Obtiene todos los usuarios
app.get('/usuarios', (req, res) => {
  res.json(usuarios); // Responde con el listado completo de usuarios
});

// Ruta POST: Agrega un nuevo usuario
app.post('/usuarios', (req, res) => {
  const nuevoUsuario = req.body; // Datos enviados por el cliente
  if (!nuevoUsuario.id || !nuevoUsuario.nombre || !nuevoUsuario.rol) {
    return res.status(400).json({ mensaje: 'El usuario debe tener id, nombre y rol' });
  }
  usuarios.push(nuevoUsuario); // Agrega el usuario al arreglo
  res.status(201).json({ mensaje: 'Usuario añadido', usuario: nuevoUsuario });
});

// Ruta PUT: Actualiza un usuario por su ID
app.put('/usuarios/:id', (req, res) => {
  const idUsuario = parseInt(req.params.id); // Obtiene el ID del usuario
  const usuarioActualizado = req.body; // Nuevos datos enviados por el cliente
  const indice = usuarios.findIndex(u => u.id === idUsuario); // Busca el usuario por ID

  if (indice === -1) {
    return res.status(404).json({ mensaje: 'Usuario no encontrado' });
  }

  usuarios[indice] = usuarioActualizado; // Actualiza los datos del usuario
  res.json({ mensaje: 'Usuario actualizado', usuario: usuarioActualizado });
});

// Ruta DELETE: Elimina un usuario por su ID
app.delete('/usuarios/:id', (req, res) => {
  const idUsuario = parseInt(req.params.id); // Obtiene el ID del usuario
  const indice = usuarios.findIndex(u => u.id === idUsuario); // Busca el usuario por ID

  if (indice === -1) {
    return res.status(404).json({ mensaje: 'Usuario no encontrado' });
  }

  usuarios.splice(indice, 1); // Elimina el usuario del arreglo
  res.json({ mensaje: 'Usuario eliminado' });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
