const saveImage = require('../helpers/save_images')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model')
const Company = require("../models/company.model");

// company type 1, user type 0
const signup =async (req, res)=>{
    // email and password are common in users and comapnies
    // validate email and password
    const {email, password} = req.body
    let {profile_picture, banner} = req.body

    if (profile_picture) profile_picture = `${saveImage(profile_picture).localPath}${saveImage(profile_picture).filename}`
    else profile_picture = 'C:/Users/khodor/Code/SeFactory/Webdev-SeF/LinkedOut/backend/uploads/images/Photo_1665834472787_846.jpeg'

    if(banner) banner = `${saveImage(banner).localPath}${saveImage(banner).filename}`
    else banner = 'C:/Users/khodor/Code/SeFactory/Webdev-SeF/LinkedOut/backend/uploads/images/Photo_1665834472787_846.jpeg'

    if(!email || ( await User.findOne({email:email}) || await Company.findOne({email:email}))){
        res.status(400).json({message:" Email Something went wrong"})
        return
    }
    if(!password) {res.status(400).json({message:"Password Something went wrong"}); return}

    // Check if company or user, type = 0 is user
    const {type} = req.body 
    if (parseInt(type)) {
      // company
      const { name, bio } = req.body;
      const company = new Company();
      company.name = name;
      company.email = email;
      company.password = await bcrypt.hash(password, 10);
      company.profile_picture = profile_picture;
      company.banner = banner;
      await company.save();
      res.status(200).json(company);

    } else {

      const { firstname, lastname, education } = req.body;
      const user = new User();
      user.firstname = firstname;
      (user.lastname = lastname), (user.email = email);
      user.password = await bcrypt.hash(password, 10);
      user.profile_picture = profile_picture;
      user.banner = banner;
      user.education = education;
      await user.save();
      res.json(user);

    }
    
}

const login = async (req, res) =>{
    const {email, password, type} = req.body
    let person
    // if(parseInt(type)){
    //     person = await Company.findOne({email:email})
    // }else{
    //     person = await User.findOne({email:email})
    // }
    person = await Company.findOne({email:email})
    if(!person) person = await User.findOne({email:email})
    // res.send(person)
    if(!person) return res.status(404).json({message: "Invalid Credentials"});

    const isMatch = await bcrypt.compare(password, person.password);
    if(!isMatch) return res.status(404).json({message: "Invalid Credentials"});

    const token = jwt.sign({person}, process.env.JWT_SECRET, {
        expiresIn: '72h'
    });
    res.status(200).json({token, person})
}

module.exports = {signup, login}