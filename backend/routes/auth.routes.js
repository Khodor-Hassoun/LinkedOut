const {signup, login} = require('../controllers/auth.controller')
const {Router} = require('express');
const router = Router();


router.post('/login', login);
router.post('/signup', signup);

module.exports = router