const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        required: true,
        unique: [true, 'Already taken']
    },
    password: String,
    profile_picture: String,
    banner: String,
    education: String
})

const User = mongoose.model('User',userSchema);
module.exports = User;