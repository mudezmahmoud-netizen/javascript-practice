class student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log("my name is" + this.name);
    console.log("i am" + this.age + "years old");
  }
}
const student1 = new student("Ali", 20);
const student2 = new student(",Mary", 15);

student1.introduce();
student2.introduce();
