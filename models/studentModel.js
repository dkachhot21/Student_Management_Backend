const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the Name"]
    },
    email: {
        type: String,
    },
    phoneNumber: {
        type: Number,
    },
    age: {
        type: Number,
    },
    isStudent: {
        type: Boolean,
    },
    highestQualification: {
        type: String,
    },
    interests: {
        type: Array,
    },
    address:{
        type:String,
    },
    branch:{
        type:String,
    },
},{
    timestamps:true,
});

module.exports = mongoose.model("Student", StudentSchema);