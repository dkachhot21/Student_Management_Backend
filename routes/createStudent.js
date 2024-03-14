const express = require('express');
const router = express.Router();
const createStudent = require('../controllers/createController');


router.route('/').post(createStudent); //Handled by createController




module.exports = router;