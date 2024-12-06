const jwt = require('jsonwebtoken');

//middleware para verificar el token
exports.verifyToken = (req, res, next) => {
    const tokenHeader = req.headers['authorization'];
    console.log(tokenHeader);

    if(!tokenHeader){
        return res.status(403).json({message:'Token no proporcionado'});
    } 
    const token = tokenHeader.split('')[1]; // Bearer (token)
    console.log('Token procesado:' , token)

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);// verificar el token
        console.log('Token decodificado: ', decoded);
        res.user = decoded;
        next();
        
    } catch (error) {
        console.error('Error al verificar el token', error.message);
        return res.status(401).json({message: ' token invalido'})
    }
};