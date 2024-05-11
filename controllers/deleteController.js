const { constants } = require('../constants');
const asyncHandler = require('express-async-handler');
const Student = require('../models/studentModel');


//@desc Delete Student Collection
//@router DELETE /delete/{id}
//@access public

const deleteStudent = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const student = await Student.findById(id);
    if (!student) {
        res.status(constants.NOT_FOUND);
        throw new Error("No Student found");
    }

    await Student.deleteOne({ _id: id });
    res.json({ message: "Success", data: "Document deleted successfully" })
});

module.exports = deleteStudent;