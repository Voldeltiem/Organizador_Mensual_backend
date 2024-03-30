const dbConnection = require('../models/db')
const jwt = require('jsonwebtoken');

module.exports.getUser = async (req, res) => {
    const token = req.headers.authorization;
  
    // Verificar si el token está presente
    if (!token) {
        return res.status(401).json({ message: "Token de autorización no proporcionado" });
    }
    const jwtToken = token.split(" ")[1];
    const { email } = jwt.decode(jwtToken);
    const consulta = 'SELECT * FROM users where email = $1';
    const {rows:[user], rowCount} = await dbConnection.query(consulta, [email])
    res.send(user);


}