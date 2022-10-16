const saveImage = require('../helpers/save_images')
const bcrypt = require('bcrypt');
const Company = require('../models/company.model')

const getAllCompanies = async (req, res)=>{
    const comapnies = await Company.find({}).select('-password')
    res.json(comapnies)
}

const getCompany = async (req, res) =>{
    const id = req.params.id
    const company = await Company.findById(id)
    res.json(company)

}

const updateCompany = async (req, res) =>{
    const {id} = req.body
    const company = await Company.findById(id)
    let {name, email, password, bio, profile_picture, banner} = req.body
    let emaill
    if(email){
        if(await Company.findOne({email:email})){
            res.status(400).json({message:"Error"})
            return
        }
    }else{emaill = company.email}

    company.name = name ? name : company.name
    company.email = emaill
    company.password = password ? await bcrypt.hash(password, 10) : company.password
    company.bio = bio ? bio : company.bio
    company.profile_picture = profile_picture ?  `${saveImage(profile_picture).localPath}${saveImage(profile_picture).filename}` : company.profile_picture
    company.banner = banner ? `${saveImage(banner).localPath}${saveImage(banner).filename}` : company.banner

    await company.save()
    res.json(company)


}

const deleteCompany = async (req, res) =>{
    const {id} = req.body
    await Company.findByIdAndDelete(id).then(company => res.json(company))
}

const addJob = async (req, res) =>{
    const id = req.body.id
    const {description} = req.body
    const company = await Company.findById(id)
    company.job_posts.push({description}) 
    
    await company.save()
    res.json(company)

}

module.exports = {getAllCompanies, getCompany, updateCompany, deleteCompany, addJob}