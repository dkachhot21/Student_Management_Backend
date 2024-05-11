const { constants } = require('../constants');
const asyncHandler = require('express-async-handler');
const Student = require('../models/studentModel');


//@desc Update Student Collection
//@router PATCH /update/{id}
//@access public

const updateStudent = asyncHandler(async (req, res) => {
    const id = req.params.id;
    let updateFields = req.body;
    if (!id) {
        res.status(constants.BAD_REQUEST);
        throw new Error("Please enter Student ID");
    } else {
        const student = await Student.findById(id);
        if(updateFields.interests){
            student.interests.forEach((element)=>{
                if(!updateFields.interests.includes(element)){
                    updateFields.interests.push(element);
                }
            });
        }
        const studentRes = await Student.findOneAndUpdate(
            { _id: id },
            { $set: updateFields },
            { new: true } //return the updated document instead of original one
        )
        if (!studentRes) {
            res.status(constants.NOT_FOUND);
            throw new Error("Student not Found");
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