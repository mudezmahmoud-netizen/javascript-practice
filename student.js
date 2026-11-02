class Student {
  constructor(name, course, age) {
    this.name = name;
    this.course = course;
    this.age = age;
  }

  getDetails() {
    return {
      name: this.name,
      course: this.course,
      age: this.age,
    };
  }

  isAdult() {
    return this.age >= 18;
  }
}

module.exports = { Student };
