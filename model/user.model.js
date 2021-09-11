const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    denomination: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        default: 'https://res.cloudinary.com/emmanuel-cloud-storage/image/upload/v1624974538/user-placeholder_uhoqlp.png'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

mongoose.model('user', userSchema);
