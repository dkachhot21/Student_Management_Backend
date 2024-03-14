const express = require('express');
const router = express.Router();
const getStudent = require('../controllers/getController');


/**
 * @swagger
 * /get:
 *  get:
 *      tags:
 *          - Student Management Application
 *      summary: "Retrieve Students from database by _id (If not ID is provided, it will return all the data)"
 *      description: "Retrieve data from database using _id"
 *      parameters:
 *          - in: query
 *            Required: True
 *            name: id
 *            schema:
 *              type: string
 *            description: "ID of the data to retrieve"
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: "Student retrieved successfully"
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                      example:
 *                          "name": "Jhon Doe"
 *                          "email": "jhon@gmail.com"
 *                          "phoneNumber": 111111
 *                          "age": 21
 *                          "isStudent": true
 *
 */
router.route('/').get(getStudent);



module.exports = router;