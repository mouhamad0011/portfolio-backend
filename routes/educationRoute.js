const express = require('express');
const router = express.Router();
const education=require('../contollers/educationController');
router.get('/getAll', education.getAllEducations);
router.post('/add',education.addEducations);
router.delete('/delete/:ID',education.deleteEducation);
router.put('/update/:ID', education.updateEducationByID);
module.exports = router;
