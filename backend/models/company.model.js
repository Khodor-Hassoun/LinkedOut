const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    name:String,
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:String,
    bio:String,
    profile_picture: String,
    banner: String,
    job_posts: {
        type:Array,
        applicants: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }]
    }
})