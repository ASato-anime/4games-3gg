const express = require('express');
const mongoose = require('mongoose');
const app = express();
const session = require('express-session');
const router = express.Router();
const USER = require("../models/USER");
const bcrypt = require("bcryptjs");

const flash = require('connect-flash');


router.get("/signup", (req, res) => {
    res.render('signup', {
        ErrorsArr: [],
    })
})
router.post("/signup", async(req, res) => {
    const { name, email, city, password } = req.body;
    const exUser = await USER.findOne({ email: email });
    let errors = [];

    if (exUser) {
        errors.push({ msg: "User is already exists." });
        return res.render("signup", {
            ErrorsArr: errors
        })
    }


    const newUser = new USER({
        name: name,
        email: email,
        password: password,
        city: city,
        Date: Date.now(),
        Role: "User",
    })

    newUser.save((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(newUser)
            res.redirect("/login")
        }
    })
})


module.exports = router;