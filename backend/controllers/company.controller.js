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

module.exports = {getAllCompanies, getCompany}