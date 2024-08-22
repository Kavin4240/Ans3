const express = require('express');
const { signup, login, getUserDetails } = require('../controllers/authController'); // Ensure this path is correct
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/user-details', authMiddleware, getUserDetails); // New route to get user details

module.exports = router;
