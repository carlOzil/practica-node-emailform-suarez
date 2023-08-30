const express = require('express');
const { indexForm, enviarEmail } = require('../controllers/formController')

const router = express.Router()

router.get('/', indexForm)

router.post('/enviado', enviarEmail)


module.exports = router