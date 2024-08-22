const User = require('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config'); // Updated to use local config file

// Signup controller function
exports.signup = async (req, res) => {
    const { name, email, password, gender } = req.body;

    if (!name || !email || !password || !gender) {
        return res.status(400).json({ success: false, msg: 'Please enter all fields' });
    }

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ success: false, msg: 'User already exists' });
        }

        user = new User({ name, email, password, gender });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        if (email === 'admin@email.com' && password === 'Admin@123') {
            user.isAdmin = true;
        }

        await user.save();

        res.status(201).json({ success: true, msg: 'User registered successfully' });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ success: false, msg: 'Server error' });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ msg: 'Please enter both email and password' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Increment login count
        user.count += 1;
        user.lastLogin = Date.now();
        await user.save();

        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            config.jwtSecret, // Use the secret from config
            { expiresIn: '1h' }
        );

        const redirectUrl = user.isAdmin ? '/admin-dashboard' : '/profile';

        res.status(200).json({ success: true, token, redirect: redirectUrl });

    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.getUserDetails = async (req, res) => {
    try {
        const user = await User.findById(req.user.id); // Get user from token
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        res.status(200).json({
            name: user.name,
            email: user.email,
            gender: user.gender,
            count: user.count,
            lastLogin: user.lastLogin
        });
    } catch (error) {
        console.error('Error getting user details:', error);
        res.status(500).json({ msg: 'Server error' });
    }
};
