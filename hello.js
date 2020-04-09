var Student = /** @class */ (function () {
    function Student(code, name) {
        this.studName = name;
        this.studCode = code;
    }
    Student.prototype.getGrade = function () {
        return "A+";
    };
    return Student;
}());
