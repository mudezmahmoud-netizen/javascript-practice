async function fetchstudent() {
  const response = await fetch("https://jsonplaceholder.typicode.com");
  if (!response.ok) {
    throw new Error("Failed to fetch student");
  }

  const student = await response.json();

  return student;
}
module.exports = { fetchStudent };
