require('dotenv').config()
require('./config/db.connection')
// import axios from 'axios';
const axios = require('axios')
const express = require('express');
const app = express();
app.use(express.json());
app.listen(process.env.APP_PORT,()=>{
    console.log(`on port ${process.env.APP_PORT}`)
})