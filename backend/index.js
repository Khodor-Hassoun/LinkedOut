require('dotenv').config()
require('./config/db.connection')


const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const testRoutes = require('./routes/test.routes')
app.use('/test',testRoutes)

const authRoutes = require('./routes/auth.routes')
app.use('/auth',authRoutes)

const userRoutes = require('./routes/user.routes')
app.use('/users', userRoutes)

app.listen(process.env.APP_PORT,()=>{
    console.log(`on port ${process.env.APP_PORT}`)
})