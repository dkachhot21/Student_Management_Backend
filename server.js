const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler')
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const PORT = process.env.PORT || 3000;


//Initialize Express app
const app = express();


//Swagger setup
const swaggerOptions = {

    swaggerDefinition: {
        openapi: '3.0.3',
        info: {
            title: 'Backend Infrastructure of a Student Manager Application',
            description: '1.) First Create a Student in the platform (Student name is necessary)\n\n2.) Get the Student by Providing the Student ID in the url query \n\n3.) Update the Student details by providing the details that needs to be updated with the student ID for which we need to do the update operation in the request body\n\n4.) Delete the Student by providing Student ID in the request body',
            version: '0.0.1',
        },
        servers: [
            {
                url: 'http://localhost:3000/',
                description: 'Local server',
            },
            {
                url:'https://student-management-backend-k5ee.onrender.com/',
                description:'Render Deployment Server',
            }
        ],
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));


//MiddleWares
app.use(express.json());
app.use(cors());


//Connect to Database
connectDB();


//-------------------Routes------------------------
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