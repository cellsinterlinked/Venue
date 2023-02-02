const express = require('express')
const monthControllers = require('../controllers/month-controllers');

const router = express.Router();

router.get('/', monthControllers.getAllMonths);

router.post('/new', monthControllers.createMonth)

router.post('/next', monthControllers.createNextMonth)

router.patch('/update', monthControllers.editMonth)



module.exports = router;