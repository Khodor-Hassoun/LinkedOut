const saveImage = require('../helpers/save_images')
const bcrypt = require('bcrypt');
const User = require('../models/user.model')


const getAllUsers = async (req, res)=>{
    const users = await User.find({}).select('-password')
    res.json(users)
}

const getUser = async (req, res) => {
    const id = req.params.id
    console.log(parseInt(req.user._id))
    const user = await User.findById(id)
    res.json(user)
}

const updateUser = async (req, res)=>{
    // Get user
    const {id} = req.body
    const user = await User.findById(id)

    // check values
    let {firstname, lastname, email, password, education, profile_picture, banner} = req.body
    let emaill
    // check if email exists
    if(email){
        if(await User.findOne({email:email})){
            res.status(400).json({message:"Error"})
            return
        }
    }else{emaill = user.email}

    user.firstname = firstname ? firstname : user.firstname
    user.lastname = lastname ? lastname : user.lastname
    user.email = emaill
    user.password = password ? await bcrypt.hash(password, 10) : user.password
    user.education = education ?  education : user.education
    user.profile_picture = profile_picture ?  `${saveImage(profile_picture).localPath}${saveImage(profile_picture).filename}` : user.profile_picture
    user.banner = banner ? `${saveImage(banner).localPath}${saveImage(banner).filename}` : user.banner

    await user.save()
    res.json(user)


}

module.exports = {getAllUsers, getUser, updateUser}