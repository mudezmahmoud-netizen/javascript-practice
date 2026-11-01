async function fetchData() {
    return "Hello, async Jest!";
}

module.exports = { fetchData };
async function getUser() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    const data = await response.json();

    const { name, email, address } = data;
    const { city } = address;

    console.log(name);
    console.log(email);
    console.log(city);
}

getUser();
