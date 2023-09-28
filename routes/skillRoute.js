const express = require('express');
const router = express.Router();
const skill=require('../contollers/skillsController');
router.get('/getAll', skill.getSkills);
router.post('/add',skill.addSkill);
router.delete('/delete/:ID', skill.deleteSkill);
module.exports = router;
