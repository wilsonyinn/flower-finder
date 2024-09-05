const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// User registration endpoint
router.post('/register', async (req, res) => {
    const { email, username, password } = req.body;
    console.log(email, username, password);
    // Simple validation
    if (!username || !password || !email)
    {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    try {
    // Check if the username already exists
    const usernameExists = await User.findOne({ username });
    if (usernameExists) {
        return res.status(400).json({ success: false, message: 'Username already exists' });
    }

    // Check if the username already exists
    const emailExists = await User.findOne({ email });
    if (emailExists) {
        return res.status(400).json({ success: false, message: 'Email already exists' });
    }

    // Save the user
    const newUser = new User({ email, username, password });
    await newUser.save();
    res.json({ success: true, message: 'User registered successfully' });
    } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'An error occurred while registering the user' });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Simple validation
    if (!password || !email)
    {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    try {
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(400).json({ success: false, message: 'Invalid email or password' });
        }
    
        // Check if the password matches
        if (user.password !== password) {
          return res.status(400).json({ success: false, message: 'Invalid email or password' });
        }
    
        res.json({ success: true, message: 'Login successful', username: user.username });
      } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'An error occurred while logging in' });
      }
    });

module.exports = router;