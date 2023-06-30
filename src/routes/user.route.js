// routes/users.js
const express = require('express');
const { registerUser, loginUser } = require('../controllers/user.controllers');
const router = express.Router();

// POST /registerUser
router.post('/register', registerUser);

// POST /loginUser
router.post('/login', loginUser);

// Export the router
module.exports = router;
