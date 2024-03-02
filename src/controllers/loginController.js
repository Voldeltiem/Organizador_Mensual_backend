const dbConnection = require('../models/db');
const jwt = require('jsonwebtoken');

module.exports.login = async (req, res) => {
    const { username, password } = req.body;
    console.log('Solicitud de login recibida');

    const consulta = 'SELECT * FROM login where username = $1 and password = $2';
    try {
        const result = await dbConnection.query(consulta, [username, password]);

        if (result.rows.length > 0) {
            const token = jwt.sign({username}, 'Stack',{
                expiresIn: '3m'
            })
            console.log({token});
            res.send({token});
        } else {
            console.log('usuario o contraseña incorrecta');
            res.status(401).send({ message: 'Usuario o contraseña invalidos' })

        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error en el servidor' });
    }

}
