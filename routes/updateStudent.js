const express = require('express');
const router = express.Router();
const updateStudent = require('../controllers/updateController')

/**
 * @swagger
 * /update:
 *  patch:
 *      tags:
 *          - Student Management Application
 *      summary: "Update Student data in database"
 *      description: "updates document in mongodb"
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          _id:
 *                              type: string
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
 *                          address:
 *                              default: 4th Avenue
 *                              type: string
 *                          branch:
 *                              default: IT
 *                              type: string
 *                          interests:
 *                              default: ["ML", "WebDevelopment", "DataScience"]
 *                              type: array
 *              example:
 *                  _id: "<id>"
 *                  name: "Jhon Doe"
 *                  email: "jhon@gmail.com"
 *                  phoneNumber: 111111
 *                  age: 21
 *                  isStudent: true
 *                  address: "4th Avenue"
 *                  branch: "IT"
 *                  interests: ["ML", "WebDevelopment", "DataScience"]
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
 *                          "phoneNumber": "111111"
 *                          "age": "21"
 *                          "isStudent": true
 *                          "address": "4th Avenue"
 *                          "branch": "IT"
 *                          "interests": ["ML", "WebDevelopment", "DataScience"]
 *
 */
router.route('/').patch(updateStudent); //Function handled by the controller


module.exports = router;