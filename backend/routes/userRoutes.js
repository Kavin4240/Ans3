const express = require('express');
const router = express.Router();
const User = require('../models/users'); // Ensure this matches your actual model
const authMiddleware = require('../middleware/authMiddleware');

router.get('/users', authMiddleware, async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch users' });
    }
});

module.exports = router;
