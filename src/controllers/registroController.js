const dbConnection = require('../models/db');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");


module.exports.registro = async (req, res) => {
    const { nombre, password, email } = req.body;
    const consulta = 'INSERT INTO users (username, password, email) VALUES ($1, $2, $3);'

    //codificacion de contraseña
     const passwordHashSync = bcrypt.hashSync(password);
    try {
        // Verificar si el correo electrónico ya existe en la base de datos
        const existeEmail = await dbConnection.query('SELECT COUNT(*) FROM users WHERE email = $1', [email]);

        // Si el correo electrónico ya existe, enviar una alerta y no realizar el registro
        if (existeEmail.rows[0].count > 0) {

            return res.send({ message: 'El correo electrónico ya está registrado' });
        } else {
            // Si el correo electrónico no existe, continuar con el registro
            await dbConnection.query(consulta, [nombre, passwordHashSync, email]);

            // Enviar respuesta al cliente indicando que el usuario ha sido registrado correctamente
            return res.status(200).send({ success: true, message: 'Usuario registrado correctamente' });
        }



    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'Error en el servidor' });
    }
}