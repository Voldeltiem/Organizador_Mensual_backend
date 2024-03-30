const express = require('express');
const router = express.Router();
const {ping} = require('../controllers/pingController')
const {login} = require('../controllers/loginController');
const { registro } = require('../controllers/registroController');
const {getUser} = require('../controllers/perfil');

router.get('/ping', ping);

router.post('/login', login)

router.post('/registro',registro)

router.post('/perfil',getUser)

module.exports = router;