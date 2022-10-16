const {signup, comanySignUp} = require('../controllers/test.controller')
const {Router} = require('express');
const router = Router();

router.post('/signup', signup)
router.post('/company', comanySignUp)

module.exports = router