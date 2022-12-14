require('dotenv').config()
require('./config/db.connection')

const cors = require('cors')
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });
// app.use(cors({
//     'allowedHeaders': ['sessionId', 'Content-Type'],
//     'exposedHeaders': ['sessionId'],
//     'origin': '*',
//     'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     'preflightContinue': false
//   }));
app.use(cors())

const testRoutes = require('./routes/test.routes')
app.use('/test',testRoutes)

const authRoutes = require('./routes/auth.routes')
app.use('/auth',authRoutes)

const userRoutes = require('./routes/user.routes')
app.use('/users', userRoutes)

const companyRoutes = require('./routes/company.routes')
app.use('/companies', companyRoutes)

app.listen(process.env.APP_PORT,()=>{
    console.log(`on port ${process.env.APP_PORT}`)
})