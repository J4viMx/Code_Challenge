const StudentsController = require("./controllers/StudentsController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "WELCOME STUDENTS!"});
});


app.get("/v1/students", (request, response) =>{
    const allStudents = StudentsController.getallStudents();
    response.json(allStudents);
});

app.get("/v1/students/emails", (request, response) =>{
    const emailStudentHaveCertification = StudentsController.getemailStudentHaveCertification();
    response.json(emailStudentHaveCertification);
});

app.get("/v1/students/credits", (request, response) =>{
    const studentsCredits = StudentsController.getstudentsCredits();
    response.json(studentsCredits);
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
}); 