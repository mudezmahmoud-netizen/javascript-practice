const { fetchData } = require("./async");

test("fetchData returns the correct message", async () => {
  const result = await fetchData();

  expect(result).toBe("Hello, async Jest!");
});
