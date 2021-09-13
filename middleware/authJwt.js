const mongoose = require('mongoose');
const User = mongoose.model('user');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../keys');

module.exports = (req, res, next) => {
    const {authorization} = req.headers
    if(!authorization){
        return res.status(401).json({ error: "you must be logged in" })
    }
    const token = authorization.replace("Bearer ","")
    jwt.verify(token, JWT_SECRET,(err, user) => {
        if(err){
            return res.status(401).json({ error: "You must be logged in" })
        }
        req.user = user;
        next()
        // User.findById(_id).then(userdata => {
        //     req.user = userdata
        //     next()
        // })
        // console.log('User: ', req.user)
    })
}
