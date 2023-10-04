const express = require('express');
const router = express.Router();
const about = require('../contollers/aboutController');

router.get('/get', about.getAbout);
router.post('/add', about.addAbout);
router.put('/update/:ID', about.updateAboutByID);

module.exports = router;

