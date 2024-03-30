const dbConnection = require('../models/db');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    const consulta = "SELECT * FROM users WHERE email = $1";
    const { rows: [users], rowCount } = await dbConnection.query(consulta, [email]);

    if (!users || !rowCount) {
        // Lanzar una excepción indicando que el usuario o la contraseña son incorrectos
        throw { code: 401, message: "Usuario o contraseña incorrecto" };
    }
    // Extraer la contraseña encriptada del usuario devuelto por la consulta
    const { password: passwordEncriptada } = users;
    const passwordCorrecta = bcryptjs.compareSync(password, passwordEncriptada);
    // Si la contraseña proporcionada no coincide con la contraseña encriptada almacenada, o no se encontró ningún usuario
    if (!passwordCorrecta) {
        // Lanzar una excepción indicando que el usuario o la contraseña son incorrectos
        return res.send( { message: "Usuario o contraseña incorrecto" });
    }
    const token = jwt.sign({ email }, "stanco", {
        expiresIn: '10m' 
    });

    res.send({ token });
}
