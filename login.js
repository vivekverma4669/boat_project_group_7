function validateUser() {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var storedData = localStorage.getItem("userData");

    if (storedData !== null) {
        var userData = JSON.parse(storedData);
        var storedEmail = userData.email;
        var storedPassword = userData.password;
        if (email === storedEmail && password === storedPassword) {      
         alert("Login successful!");    
        //  console.log("login");
            return;
        }
    }
    alert("Invalid email or password");
}