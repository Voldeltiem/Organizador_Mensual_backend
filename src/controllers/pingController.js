const connection = require('../models/db');

module.exports.ping = (req, res) =>{

    const consulta ='SELECT * FROM login';

    try {
        connection.query(consulta, (err, results)=>{
            console.log(results);
            res.json(results)
        });
        
    } catch (e) {
        
    }
}