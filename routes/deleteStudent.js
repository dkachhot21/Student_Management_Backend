const express = require('express');
const router = express.Router();
const deleteStudent = require('../controllers/deleteController')

router.route('/').delete(deleteStudent);



module.exports = router;