document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let terms = document.getElementById("terms").checked;


    let nameRegex = /^[A-Za-z\s]{3,30}$/;
    let rollRegex = /^[A-Za-z0-9]{4,10}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let mobileRegex = /^[6-9]\d{9}$/;
    let passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    
    if (!nameRegex.test(name)) {
        alert("Name should contain only letters and spaces (3-30 characters).");
        return;
    }


    if (!rollRegex.test(roll)) {
        alert("Roll Number must be 4-10 alphanumeric characters.");
        return;
    }

  
    if (!emailRegex.test(email)) {
        alert("Enter a valid email address.");
        return;
    }

   
    if (!mobileRegex.test(mobile)) {
        alert("Enter a valid 10-digit mobile number.");
        return;
    }


    if (!passwordRegex.test(password)) {
        alert(
            "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
        );
        return;
    }


    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

   
    if (!terms) {
        alert("Please accept Terms and Conditions.");
        return;
    }

    alert("Student Registered Successfully!");
    document.getElementById("studentForm").reset();
});