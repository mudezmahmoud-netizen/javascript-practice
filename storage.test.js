
const { StudentStorage } = require("./src/storage");

describe("StudentStorage tests", () => {
  const student = {
    name: "Mahmoud",
    course: "Software Engineering"
  };

  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  test("saves student in localStorage", () => {
    StudentStorage.saveStudent(student);

    expect(StudentStorage.getStudent()).toEqual(student);
  });

  test("returns null when student is missing", () => {
    expect(StudentStorage.getStudent()).toBeNull();
  });

  test("removes student from localStorage", () => {
    StudentStorage.saveStudent(student);
    StudentStorage.removeStudent();

    expect(StudentStorage.getStudent()).toBeNull();
  });

  test("saves student in sessionStorage", () => {
    StudentStorage.saveSession(student);

    expect(StudentStorage.getSessionStudent()).toEqual(student);
  });

  test("returns null when session student is missing", () => {
    expect(StudentStorage.getSessionStudent()).toBeNull();
  });

  test("removes student from sessionStorage", () => {
    StudentStorage.saveSession(student);
    StudentStorage.removeSessionStudent();

    expect(StudentStorage.getSessionStudent()).toBeNull();
  });
});
