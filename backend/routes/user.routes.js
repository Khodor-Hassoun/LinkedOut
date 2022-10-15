const authMiddleware = require('../middlewares/auth.middleware')
const {getAllUsers, getUser, updateUser} = require('../controllers/users.controller')
const {Router} = require('express');
const router = Router();

// router.get('/', getAllUsers);
router.get('/', authMiddleware, getAllUsers);
router.get('/:id', authMiddleware, getUser);
// router.post('/', createUser);
router.put('/', updateUser);
// router.delete('/', deleteUser);

module.exports = router;