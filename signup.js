function storeData() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    var userData = {
        email: email,
        password: password
    };

    var storedData = localStorage.getItem("users");
    var users = storedData ? JSON.parse(storedData) : [];

    if (users.some(user => user.email === email)) {
        alert("User already exists. Please log in.");
        return;
    }

    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful!");
}
