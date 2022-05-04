const StudentController = require("../../../lib/controllers/StudentsController");

describe("Pruebas StudentController", () => {
    test("Metodo getallStudents", () => {
        const allStudents = StudentController.getallStudents();
        expect(allStudents.length).toBe(51);
    });
    test("Metodo getemailStudentHaveCertification", () => {
        const emailStudentHaveCertification =StudentController.getemailStudentHaveCertification();
        expect(emailStudentHaveCertification.length).toBe(29);
    });
    test("Metodo getstudentsCredits", () => {
        const studentsCredits =StudentController.getstudentsCredits();
        expect(studentsCredits.length).toBe(27);
    });
});