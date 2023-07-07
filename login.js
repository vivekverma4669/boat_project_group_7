function validateUser() {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var storedData = JSON.parse(localStorage.getItem("users"));
   
    if (storedData !== null) {
        storedData.map(function(ele,idx){
            var storedEmail = ele.email;
            var storedPassword = ele.password;
            console.log(storedEmail);
            console.log(storedPassword);
            if (email === storedEmail && password === storedPassword) {      
             alert("Login successful!");    
             window.location.replace('Index.html');
                return;
            }
        })
        
    }else{
        alert("Invalid email or password");
    }
    
}