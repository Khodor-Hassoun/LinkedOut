const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL)
.then(()=>console.log('connected database'))
.catch(err =>console.log(err))