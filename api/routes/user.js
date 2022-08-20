// external import
const express = require('express');

// internal importe
const { signup, login } = require('../controllers/userController');

const router = express.Router();

// signup route
router.post('/user/signup', signup);

// login route
router.post('/user/login', login);

module.exports = router;
