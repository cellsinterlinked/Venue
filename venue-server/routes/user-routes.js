const express = require('express')
const userControllers = require('../controllers/user-controllers');

const router = express.Router()
const { check } = require('express-validator')

router.post('/create', userControllers.createUser)

router.post('/login', 
[
    check('userName').not().isEmpty(),
    check('userName').isLength({min:8}),
    check('password').not().isEmpty(),
    check('password').isLength({min:8}),
],
userControllers.login)

module.exports = router;