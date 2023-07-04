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

    var storedData = localStorage.getItem("userData");
    if (storedData !== null) {
        var storedEmail = JSON.parse(storedData).email;
        if (storedEmail === email) {
            alert("User already exists. Please log in.");
            return;
        }
    }
    localStorage.setItem("userData", JSON.stringify(userData));

}