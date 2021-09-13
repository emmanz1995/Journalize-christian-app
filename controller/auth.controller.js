const mongoose = require('mongoose');
const User = require('../model/user.model');
mongoose.model('user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../keys');

const authController = {
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            if(!email || !password) {
                return res.send({ message: 'please add all the fields' });
            }
            const user = await User.findOne({ email })
            if(!user) return res.status(400).send({ message: 'Email does not exist' })
            const passwordHashed = await bcrypt.compare(password, user.password)
            !passwordHashed && res.status(400).json('Wrong password')
            const token = jwt.sign(
                { id: user._id, email }, JWT_SECRET, { expiresIn: '5d' }
            )
            res.status(200).send({token, id: user._id})
        } catch(error) {
            res.status(422).send(error)
        }
    },
    register: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt)

            const newUser = new User({
                fullName: req.body.fullName,
                email: req.body.email,
                username: req.body.username,
                password: hashedPassword,
                denomination: req.body.denomination,
            });

            const createdUser = await newUser.save()
            res.status(200).send(createdUser)
        } catch(error) {
            res.status(200).send(error)
        }
    }
}


module.exports = { authController };
