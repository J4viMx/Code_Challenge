
class StudentsService{

    static allStudents(students){
        return students;
    }

    static emailStudentHaveCertification(students){
        const studentHaveCertification = students.filter((student) => student.haveCertification === true);
        return  studentHaveCertification.map((student) => student.email);
    }

    static studentsCredits(students, credits){
        return  students.filter((student) => student.credits > credits);
    }

}

module.exports = StudentsService;