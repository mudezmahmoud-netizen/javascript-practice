
const { Student } = require("../src/student");

describe("Student class tests", () => {

    test("creates a student object", () => {
        const student = new Student(
            "Mahmoud",
            "Software Engineering",
            22
        );

        expect(student.name).toBe("Mahmoud");
        expect(student.course).toBe("Software Engineering");
        expect(student.age).toBe(22);
    });

    test("returns student details", () => {
        const student = new Student(
            "Mahmoud",
            "Software Engineering",
            22
        );

        expect(student.getDetails()).toEqual({
            name: "Mahmoud",
            course: "Software Engineering",
            age: 22
        });
    });

    test("checks if student is an adult", () => {
        const student = new Student(
            "Mahmoud",
            "Software Engineering",
            22
        );

        expect(student.isAdult()).toBe(true);
    });

    test("checks adult age boundary", () => {
        const student = new Student(
            "Student",
            "Software Engineering",
            18
        );

        expect(student.isAdult()).toBe(true);
    });

    test("checks underage student", () => {
        const student = new Student(
            "Student",
            "Software Engineering",
            16
        );

        expect(student.isAdult()).toBe(false);
    });
});
