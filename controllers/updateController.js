const { constants } = require('../constants');
const asyncHandler = require('express-async-handler');
const Student = require('../models/studentModel');


//@desc Update Student Collection
//@router PATCH /update
//@access public

const updateStudent = asyncHandler(async (req, res) => {
    const id = req.body._id;
    let updateFields = req.body;
    delete updateFields._id;
    if (!id) {
        res.status(constants.NOT_FOUND);
        throw new Error("Student Not Found");
    } else {
        const studentRes = await Student.findOneAndUpdate(
            { _id: id },
            { $set: updateFields },
            { new: true } //return the updated document instead of original one
        )
        if (!studentRes) {
            res.status(constants.BAD_REQUEST);
            throw new Error("Failed To Update the Student Data");
        } else {
            const student = studentRes.toJSON();
            const keysToRemove = ["_id", "createdAt", "updatedAt", "__v"];
            keysToRemove.forEach((key) => {
                delete student[key];
            })
            res.status(constants.CREATED).json({ message: "Success", data: student })
        }
    }
});

module.exports = updateStudent;