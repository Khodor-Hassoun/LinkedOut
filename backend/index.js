require('dotenv').config()
require('./config/db.connection')

const axios = require('axios')
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const testRoutes = require('./routes/test.routes')
app.use('/test',testRoutes)



app.listen(process.env.APP_PORT,()=>{
    console.log(`on port ${process.env.APP_PORT}`)
})