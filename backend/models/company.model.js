const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required: true,
        // unique: true
    },
    password:String,
    bio:String,
    profile_picture: String,
    banner: String,
    job_posts:[{
        description: {
            type:String
        },
        applicants:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }]
    }]
})


const Company = mongoose.model('Company', companySchema);
module.exports = Company