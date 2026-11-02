class StudentStorage {
  static saveStudent(student) {
    localStorage.setItem("student", JSON.stringify(student));
  }

  static getStudent() {
    const data = localStorage.getItem("student");

    return data ? JSON.parse(data) : null;
  }

  static removeStudent() {
    localStorage.removeItem("student");
  }

  static saveSession(student) {
    sessionStorage.setItem("sessionStudent", JSON.stringify(student));
  }

  static getSessionStudent() {
    const data = sessionStorage.getItem("sessionStudent");

    return data ? JSON.parse(data) : null;
  }

  static removeSessionStudent() {
    sessionStorage.removeItem("sessionStudent");
  }
}

module.exports = { StudentStorage };
