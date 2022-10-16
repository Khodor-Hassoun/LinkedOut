const authMiddleware = require('../middlewares/auth.middleware')
const {getAllUsers, getUser, updateUser, deleteUser} = require('../controllers/users.controller')
const {Router} = require('express');
const router = Router();

// router.get('/', getAllUsers);
router.get('/', authMiddleware, getAllUsers);
router.get('/:id', authMiddleware, getUser);
router.put('/', authMiddleware ,updateUser);
router.delete('/', deleteUser);

module.exports = router;