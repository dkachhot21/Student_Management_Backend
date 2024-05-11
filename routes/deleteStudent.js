const express = require('express');
const router = express.Router();
const deleteStudent = require('../controllers/deleteController')



/**
 * @swagger
 * /delete/{id}:
 *  delete:
 *      tags:
 *          - Student Management Application
 *      summary: "Deletes Students from database"
 *      description: "delete document from mongodb"
 *      parameters:
 *          - in: path
 *            Required: True
 *            name: id
 *            schema:
 *              type: ObjectId
 *            description: "numeric id of contact to update"
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
router.route('/:id').delete(deleteStudent);



module.exports = router;