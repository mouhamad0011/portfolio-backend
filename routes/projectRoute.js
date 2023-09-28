const express = require('express');
const router = express.Router();
const project=require('../contollers/projectController');
router.get('/getAll', project.getProjects);
router.post('/add',project.addProject);
router.delete('/delete/:ID', project.deleteProject);
module.exports = router;
