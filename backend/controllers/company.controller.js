const saveImage = require('../helpers/save_images')
const bcrypt = require('bcrypt');
const Company = require('../models/company.model')

const getAllCompanies = async (req, res)=>{
    const comapnies = await Company.find({}).select('-password')
    res.json(comapnies)
}

module.exports = {getAllCompanies}