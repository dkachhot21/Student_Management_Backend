const express = require('express');
const router = express.Router();
const createStudent = require('../controllers/createController');

/**
 * @swagger
 * /create:
 *  post:
 *      tags:
 *          - Student Management Application
 *      summary: "adds Students to database"
 *      description: "adds document in mongodb"
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              default: Jhon Doe
 *                              type: string
 *                          email:
 *                              default: jhon@gmail.com
 *                              type: string
 *                          phoneNumber:
 *                              default: 111111
 *                              type: integer
 *                          age:
 *                              default: 20
 *                              type: integer
 *                          isStudent:
 *                              default: true
 *                              type: boolean
 *                          interests:
 *                              default: ["ML", "WebDevelopment", "DataScience"]
 *                              type: array
 *              example:
 *                  name: "Jhon Doe"
 *                  email: "jhon@gmail.com"
 *                  phoneNumber: "111111"
 *                  age: "21"
 *                  isStudent: true
 *      produces:
 *          - application/json
 *      responses:
 *          201:
 *              description: "success"
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
router.route('/').post(createStudent); //Handled by createController




module.exports = router;