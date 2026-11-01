const { add, getStudent } = require("./math");

describe("Common Jest Matchers", () => {
  test("checks exact equality", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("checks object equality", () => {
    expect(getStudent()).toEqual({
      name: "Mahmoud",
      course: "Software Engineering",
    });
  });

  test("checks if values are not equal", () => {
    expect(add(2, 3)).not.toBe(10);
  });

  test("checks truthy values", () => {
    expect(true).toBeTruthy();
  });

  test("checks falsy values", () => {
    expect(false).toBeFalsy();
  });

  test("checks array contents", () => {
    const courses = ["HTML", "CSS", "JavaScript"];
    expect(courses).toContain("JavaScript");
  });

  test("checks array length", () => {
    const numbers = [1, 2, 3];
    expect(numbers).toHaveLength(3);
  });

  test("checks greater than", () => {
    expect(10).toBeGreaterThan(5);
  });

  test("checks less than", () => {
    expect(3).toBeLessThan(8);
  });

  test("checks null", () => {
    expect(null).toBeNull();
  });
});

describe("Add function normal and edge cases", () => {
  test("Add two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
  test("Add two negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
  });
  test("Add a negative number and  positve number", () => {
    expect(add(-5, 10)).toBe(5);
  });
  test("Add zero to a number", () => {
    expect(add(5, 0)).toBe(5);
  });
  describe("getstudent function", () => {
    test("returns the correct name", () => {
      expect(getStudent().name).toBe("Mahmoud");
    });
    test("returns the correct course", () => {
      expect(getStudent().course).toBe("Software Engineering");
    });

    test("returns an object", () => {
      expect(typeof getStudent()).toBe("object");
    });
  });
});
