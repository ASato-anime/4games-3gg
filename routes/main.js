const express = require('express');
const session = require("express-session");
const router = express.Router();
const isAuth = require('../config/isAuth');
router.get('/', isAuth, (req, res) => {
    res.send(`Hello, ${req.session.username}! Welcome to your account.`)
})

module.exports = router;