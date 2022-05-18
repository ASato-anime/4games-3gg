const session = require('express-session');
const isAuth = (req, res, next) => {
    if (req.session.isAuth) {
        next()
    } else {
        next()
        //res.redirect('/login')
    }
}

module.exports = isAuth;