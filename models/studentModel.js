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
    address: {
        type: String,
    },
    branch: {
        type: String,
    },
}, /* { //Way to remove unwanted things from JSON before sending as response
    //We don't need it cause we want to get the id when someone calls entire collection of students to get the id to perform other things
    // Define options for the schema
    toJSON: {
        // Exclude the fields when converting to JSON
        transform: function (doc, ret) {
            delete ret._id;
            delete ret.createdAt;
            delete ret.updatedAt;
            delete ret.__v;
        }
    }
}, */ {
    timestamps: true,
});

module.exports = mongoose.model("Student", StudentSchema);