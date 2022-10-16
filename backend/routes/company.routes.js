const authMiddleware = require('../middlewares/auth.middleware')
const {getAllCompanies, getCompany, updateCompany, deleteCompany, addJob} = require('../controllers/company.controller')
const {Router} = require('express');
const router = Router();

router.get('/', authMiddleware ,getAllCompanies);
router.get('/:id', authMiddleware ,getCompany);
router.put('/', authMiddleware ,updateCompany);
router.delete('/', authMiddleware ,deleteCompany);

router.post('/jobs', addJob)

module.exports = router;