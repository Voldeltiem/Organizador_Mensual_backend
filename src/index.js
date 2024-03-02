const express = require('express')
const app = express()
const port = 3000;
const routes = require('./api/endPoints');
const cors = require('cors')

app.use(express.json());
app.use('/', cors(), routes);
app.use(cors({}))

app.listen(port, ()=>{
    console.log(`Servidor en puerto ${port}`)
})