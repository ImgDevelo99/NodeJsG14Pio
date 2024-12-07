const jwt = require('jsonwebtoken'); // Importa la librería jsonwebtoken

// Middleware para verificar el token
exports.verifyToken = (req, res, next) => {
  const tokenHeader = req.headers['authorization'];
  console.log('Token recibido:', tokenHeader); // Debug

  if (!tokenHeader) {
    return res.status(403).json({ message: 'Token no proporcionado' });
  }

  const token = tokenHeader.split(' ')[1]; // Extrae solo el token
  console.log('Token procesado:', token); // Debug

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifica el token
    console.log('Token decodificado:', decoded); // Debug
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Error al verificar el token:', error.message); // Debug
    return res.status(401).json({ message: 'Token inválido' });
  }
};
