function saveCookie() {
    const name = document.getElementById("name").value;

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    document.cookie = "username=" + name + "; max-age=86400; path=/";

    window.location.href = "welcome.html";
}

function showWelcome() {
    const cookie = document.cookie.split("; ");

    let username = "";

    for (let i = 0; i < cookie.length; i++) {
        const data = cookie[i].split("=");

        if (data[0] === "username") {
            username = data[1];
        }
    }

    if (username !== "") {
        document.getElementById("message").textContent =
            "Welcome, " + username + "!";
    }
}

function deleteCookie() {
    document.cookie =
        "username=; max-age=0; path=/";

    alert("Cookie deleted.");

    window.location.href = "script.html";
}

function goBack() {
    window.location.href = "script.html";
}