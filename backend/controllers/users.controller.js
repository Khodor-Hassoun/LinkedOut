const User = require('../models/user.model')


const getAllUsers = async (req, res)=>{
    const users = await User.find({}).select('-password')
    res.json(users)
}

const getUser = async (req, res) => {
    const id = req.params.id
    const user = await User.findById(id)
    res.json(user)
}

module.exports = {getAllUsers, getUser}