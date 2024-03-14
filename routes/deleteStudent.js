const express = require('express');
const router = express.Router();
const deleteStudent = require('../controllers/deleteController')



/**
 * @swagger
 * /delete:
 *  delete:
 *      tags:
 *          - Student Management Application
 *      summary: "Deletes Students from database"
 *      description: "delete document from mongodb"
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          _id:
 *                              type: string
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: "Student Deleted"
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                      example:
 *                          "message": "success"
 *                          "data": "Document Deleted Successfully"
 *
 */
router.route('/').delete(deleteStudent);



module.exports = router;