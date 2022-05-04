const StudentsService= require("../services/StudentsService");
const Reader = require("../utils/Reader");


class StudentsController{

    static getallStudents(){
        const students = Reader.readJsonFile();
        return StudentsService.allStudents(students);
    }

    static getemailStudentHaveCertification(){
        const students = Reader.readJsonFile();
        return StudentsService.emailStudentHaveCertification(students);
    }

    static getstudentsCredits(){
        const students = Reader.readJsonFile();
        return StudentsService.studentsCredits(students, 500);
    }

}

module.exports = StudentsController;