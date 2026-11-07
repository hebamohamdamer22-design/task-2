class Student {

    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    calculateAverage() {

        let total = this.grades.reduce(function(sum, grade) {
            return sum + grade;
        }, 0);

        return total / this.grades.length;
    }

    getGrade(average) {

        if (average >= 90) {
            return "A";
        }
        else if (average >= 80) {
            return "B";
        }
        else if (average >= 70) {
            return "C";
        }
        else if (average >= 60) {
            return "D";
        }
        else if (average >= 50) {
            return "E";
        }
        else {
            return "F";
        }
    }

    getResult() {

        let average = this.calculateAverage();

        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        }
        else {
            return "يحتاج مراجعة";
        }
    }
}

let studentsList = [

    new Student(1, "shahd", [90, 85, 95], 90),

    new Student(2, "amr", [45, 48, 42], 80),

    new Student(3, "samar", [40, 45, 44], 70),

    new Student(4, "nasr", [70, 75, 80], 95)

];

let weakStudents = studentsList.filter(function(student) {

    let average = student.calculateAverage();

    return average >= 40 && average <= 49;

});

let mercyStudents = weakStudents.map(function(student) {

    let average = student.calculateAverage();

    return {
        id: student.id,
        name: student.name,
        oldAverage: average,
        newAverage: average + 5
    };

});

let total = mercyStudents.reduce(function(sum, student) {

    return sum + student.newAverage;

}, 0);

let mercyAverage = 0;

if (mercyStudents.length > 0) {

    mercyAverage = total / mercyStudents.length;

}

console.log("Students Report");

console.log("********************");

studentsList.forEach(function(student) {

    let average = student.calculateAverage();

    console.log("Student Name: " + student.name);

    console.log("Average: " + average);

    console.log("Grade: " + student.getGrade(average));

    console.log("Result: " + student.getResult());

    console.log("--------------------------------");

});

console.log("Mercy Students");

console.log(mercyStudents);

// **********************************
console.log("Mercy Average");

console.log(mercyAverage);
