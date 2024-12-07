const express = require('express');
const { register, login, profile } = require('../controllers/authController');
const { verifyToken } = require('../utils/jwt');

const router = express.Router();

// Ruta para registro
router.post('/register', register);

// Ruta para login
router.post('/login', login);

// Ruta para obtener el perfil (requiere autenticación)
router.get('/profile', verifyToken, profile);

module.exports = router;

