const express = require('express');
const router = express.Router();
const USER = require('../models/USER');


router.get('/', async(req, res) => {
    res.render('myprofile', {
        user: await USER.findOne({ email: req.session.Email })
    })
})

router.post(`/`, async(req, res) => {
    await USER.findOneAndUpdate({ email: req.query.email}, {$set: {name: req.body.username, email: req.body.email, password: req.body.password[0], city: req.body.password[1]}});
    res.redirect("/myprofile");

})

module.exports = router;