const express = require('express');
const router = express.Router();

let users = [];

// User registration endpoint
router.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Simple validation
    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Username and password are required' });
    }

    // Check if the user already exists
    const userExists = users.some(user => user.username === username);
    if (userExists) {
        return res.status(400).json({ success: false, message: 'Username already exists' });
    }

    // Save the user (in this example, we're just storing it in memory)
    users.push({ username, password });
    res.json({ success: true, message: 'User registered successfully' });
});

module.exports = router;