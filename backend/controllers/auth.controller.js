const saveImage = require('../helpers/save_images')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model')
const Company = require("../models/company.model");


const signup =async (req, res)=>{
    // email and password are common in users and comapnies
    // validate email and password
    const {email, password, profile_picture, banner} = req.body

    if(!email || ( await User.findOne({email:email}) || await Company.findOne({email:email}))){
        res.status(400).json({message:" Email Something went wrong"})
        return
    }
    if(!password) res.status(400).json({message:"Password Something went wrong"});

    // Check if company or user, type = 0 is user
    const {type} = req.body 
    if(parseInt(type)){
        // company
        const {name, bio} = req.body
        const company = new Company()
        company.name = name;
        company.email = email;
        company.password = await bcrypt.hash(password, 10);
        // company.profile_picture = `${saveImage(profile_picture).localPath}${saveImage(profile_picture).filename}`;
        // company.profile_picture = `${saveImage(banner).localPath}${saveImage(banner).filename}`;
        
        await company.save();
        res.status(200).json(company)

    }
    res.json({message:"Not company"})
    
}
module.exports = signup