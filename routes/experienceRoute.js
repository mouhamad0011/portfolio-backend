const express = require('express');
const router = express.Router();
const experience=require('../contollers/experienceController');
router.get('/getAll', experience.getAllExperiences);
router.post('/add',experience.addExperience);
router.delete('/delete/:ID',experience.deleteExperience);
router.put('/update/:ID', experience.updateexperienceByID);
module.exports = router;
