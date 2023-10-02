const express = require('express');
const router = express.Router();
const admin=require('../contollers/adminController');
router.get('/get/:username/:password', admin.getAdmin);
router.post('/add',admin.addAdmin);
module.exports = router;
