const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const connectDB = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler')

//Start express as app
const app = express();
const PORT = process.env.PORT || 3000;

//MiddleWares
app.use(bodyParser.json());


//Connect to Database
connectDB();


//Routes
app.get('/',(req,res)=>{
    res.send({message:"Welcome to Student Management API Homepage"});
});

//Create Student Route
const createStudent=require('./routes/createStudent');
app.use('/create',createStudent);

//Get Students Route
const getStudents=require('./routes/getStudent');
app.use('/get',getStudents);

//Update Students Route
const updateStudents=require('./routes/updateStudent');
app.use('/update',updateStudents);

//Delete Student Route
const deleteStudent=require('./routes/deleteStudent');
app.use('/delete',deleteStudent)



app.use(errorHandler);
//Start the server on specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});