const { fetchStudent } = require("./API");
describe("fetchAPI tests", () => {
  test("fetches student information", async () => {
    const student = await fetchStudent();
    expect(student.id).toBe(1);
    expect(student.name).toBe("Mahmoud mohamed");
    expect(student.email).toBe("Mahmoud@gmail.com");
  });
});

