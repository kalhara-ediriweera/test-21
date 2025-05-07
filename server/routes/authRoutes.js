const express = require('express');
const { register, login, viewUser } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/user_view/:userId', viewUser);

module.exports = router;
