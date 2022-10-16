const authMiddleware = require('../middlewares/auth.middleware')
const {getAllCompanies, getCompany, updateCompany} = require('../controllers/company.controller')
const {Router} = require('express');
const router = Router();

// router.get('/', authMiddleware, getAllCompanies);
router.get('/', getAllCompanies);
router.get('/:id', getCompany);
router.put('/', updateCompany);
// router.delete('/', deleteCompany);

module.exports = router;