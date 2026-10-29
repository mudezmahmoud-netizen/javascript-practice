const student = {
  name: "Amina",
  age: 22,
};
localStorage.setitem("student", JSON.stringify(student));
const savedstudent = JSON.parse(localStorage.getitem("student"));
console.log(savedstudent.name);
console.log(savedstudent.age);
