const authMiddleware = require('../middlewares/auth.middleware')
const {getAllUsers, getUser, updateUser, deleteUser, applyJob} = require('../controllers/users.controller')
const {Router} = require('express');
const router = Router();

router.get('/', authMiddleware, getAllUsers);
router.get('/:id', authMiddleware, getUser);
router.put('/', authMiddleware ,updateUser);
router.delete('/', authMiddleware, deleteUser);

// router.post('/apply', applyJob)
module.exports = router;