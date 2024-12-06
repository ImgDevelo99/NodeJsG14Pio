const express = require('express');
const {register, login, profile} = require('../controllers/authController.js');
const {verifyToken} = require('../utils/jwt');// verifica la validez de un token

const router = express.Router();

//ruta registro
router.post('/register', register);

//ruta login
router.post('/login', login);// api/auth/login

//ruta robtener el perfil
router.get('/profile', verifyToken, profile);

module.exports = router;// exportar el enrutador

