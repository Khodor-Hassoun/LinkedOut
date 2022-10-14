const User = require('../models/user.model')

const signup = async (req, res) =>{
    const {firstname, lastname, email, password} = req.body
    const user = new User();
    user.firstname = firstname
    user.lastname = lastname;
    user.email = email;
    user.password = password;

    await user.save();
    // res.json(req.body)
    res.json(user)
}
module.exports = signup