const { constants } = require('../constants');
const asyncHandler = require('express-async-handler');
const Student = require('../models/studentModel');

//@desc Create Student Collection
//@router CREATE /create
//@access public

const createStudent = asyncHandler(async (req, res) => {
    const name = req.body.name;
    if (!name)
        return res.status(constants.BAD_REQUEST);

    const studentRes = await Student.create(req.body);
    //Change the MongoDB return value to JSON to remove unwanted entries from displaying
    let student = studentRes.toJSON();
    //Console log for getting the student ID for using get in Postman
    const keysToRemove = ["_id", "createdAt", "updatedAt", "__v"];
    keysToRemove.forEach((key) => {
        delete student[key];
    });
    if (student.interests.length === 0) {
        delete student.interests;
    }
    res.status(constants.CREATED).json({ message: "Success", data: student });
});

module.exports = createStudent;