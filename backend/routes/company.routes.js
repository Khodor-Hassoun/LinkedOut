const authMiddleware = require('../middlewares/auth.middleware')
const {getAllCompanies, getCompany, updateCompany, deleteCompany, addJob, getAllJobs, getCompanyJobs} = require('../controllers/company.controller')
const {Router} = require('express');
const router = Router();

// router.get('/', authMiddleware ,getAllCompanies);
// router.get('/:id', authMiddleware ,getCompany);
// router.put('/', authMiddleware ,updateCompany);
// router.delete('/', authMiddleware ,deleteCompany);

router.post('/jobs', addJob)
router.get('/jobs', getAllJobs)
router.get('/jobs/:id', getCompanyJobs)

module.exports = router;