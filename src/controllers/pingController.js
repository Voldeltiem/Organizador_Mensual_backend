const dbConnection = require('../models/db');

module.exports.ping = async (req, res) => {

    const consulta = 'SELECT * FROM login';

    try {
        await dbConnection.query(consulta, (err, results) => {
            console.log(results);
            res.json(results);
        });
    } catch (e) {

    }

}