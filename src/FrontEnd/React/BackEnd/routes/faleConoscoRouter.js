const express = require('express');
const { faleConoscoMessage } = require('../controllers/faleConoscoController');

const router = express.Router();


router.post('/message', faleConoscoMessage);

module.exports = router;
