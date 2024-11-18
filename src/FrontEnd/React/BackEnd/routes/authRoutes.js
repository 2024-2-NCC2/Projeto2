const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');

const router = express.Router();

// Rota de registro do usuário
router.post('/register', registerUser);

// Rota de login do usuário
router.post('/login', loginUser);

module.exports = router;
