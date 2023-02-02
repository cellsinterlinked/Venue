const express = require('express')
const photoControllers = require('../controllers/photo-controllers');
const router = express.Router()

router.post('/add', photoControllers.createPhoto)


module.exports = router