const students = [
    {
        "id": "6264d5d8b4b46a11ea710c21",
        "name": "Obrien",
        "email": "Gracie@visualpartnership.xyz",
        "credits": 876,
        "enrollments": [
            "Visual Thinking Avanzado",
            "Visual Thinking Intermedio"
        ],
        "previousCourses": 3,
        "haveCertification": true
    },
    {
        "id": "6264d5d8d6646dc0187f08d3",
        "name": "Orr",
        "email": "Nikki@visualpartnership.xyz",
        "credits": 225,
        "enrollments": [
            "Visual Thinking Básico",
            "Visual Thinking Avanzado"
        ],
        "previousCourses": 10,
        "haveCertification": false
    }    
];

const StudentsService = require("../../../lib/services/studentsService");



describe("Puebas Students Services", () => {

    test("Metodo allStudents", () => { 
        const allStudents = StudentsService.allStudents(students);
        expect(allStudents.length).toBe(students.length);
    });
     
    test("Metodo emailStudentHaveCertification", () => { 
        const emailStudentHaveCertification = StudentsService.emailStudentHaveCertification(students);
        expect(emailStudentHaveCertification.length).toBe(1);
    });

    test("Metodo studentsCredits", () => { 
        const studentsCredits = StudentsService.studentsCredits(students, 500);
        expect(studentsCredits.length).toBe(1);
    });

      

});