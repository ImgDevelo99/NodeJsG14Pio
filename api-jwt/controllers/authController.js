const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const users = [];// array db

//controllador registro
exports.register = async (req, res) => {
    const {username, password } = req.body;

    if(!username || !password){
        return res.status(400).json({message: "usuario y contraseña son obligatorias"});
    }
    //encriptar contraseña
    const hashedPassword = await bcrypt.hash(password, 10);//salt round
    const user = {username, password: hashedPassword};

    users.push(user);
    res.status(201).json({message: "Usuario registrado exitosamente"});
};

//controlador de login
exports.login = async (req, res) => {
    const {username, password } = req.body;

    const user = users.find((u) =>u.username === username);
    if(!user){
        return res.status(400).json({message: "usuario no encontrado"});
    }

    //verificacion de contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(401).json({message: "credenciales invalidas"});
    }

    //generar el token JWT
    const token = jwt.sign({username: user.username}, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
    res.json({token});
};

//controlador perfil
exports.profile = (req, res) => {
    res.json({ message: `Bienvenido ${req.username}`});
};