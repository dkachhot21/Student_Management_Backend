const express = require('express');
const router = express.Router();
const updateStudent = require('../controllers/updateController')


router.route('/').patch(updateStudent); //Function handled by the controller


module.exports = router;