const express = require('express');
const router = express.Router();
const getStudent = require('../controllers/getController');

router.route('/').get(getStudent); //Get specified user given by id in url query



module.exports = router;