const { constants } = require('../constants');
const asyncHandler = require('express-async-handler');
const Student = require('../models/studentModel');


//@desc Get Student Collection
//@router GET /get?id="studentId"
//@access public

const createStudent = asyncHandler(async (req, res) => {
    const id = req.query.id;

    //Get all Students
    if (!id) {
        const v=0;
        const students = await Student.find({__v:v});
        res.status(constants.OK).json({
            data: students
        });
        return;
    };

    //search by student ID
    const studentRes = await Student.findById(id);

    if (!studentRes) {
        res.status(constants.NOT_FOUND);
        throw new Error("Student Not Found");
    } else {
        let student = studentRes.toJSON();
        const keysToRemove = ["_id", "createdAt", "updatedAt", "__v"];
        keysToRemove.forEach((key) => {
            delete student[key];
        })
        res.status(constants.OK).json({ message: "success", data: student });
    }
});

module.exports = createStudent;