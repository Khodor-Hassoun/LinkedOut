const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    profile_picture: String,
    banner: String
})

const User = mongoose.model('User',userSchema);
module.exports = User;