// CVR Event Management System

console.log("CVR Event Management System Loaded Successfully");

// Contact Form Alert
const contactForm = document.getElementById("contactForm");

if(contactForm){
    contactForm.addEventListener("submit", function(e){
        e.preventDefault();

        const alertBox = document.getElementById("contactAlert");

        if(alertBox){
            alertBox.classList.remove("d-none");
        }

        this.reset();
    });
}

// Registration Form Alert
const registrationForm = document.getElementById("registrationForm");

if(registrationForm){
    registrationForm.addEventListener("submit", function(e){
        e.preventDefault();

        const alertBox = document.getElementById("successAlert");

        if(alertBox){
            alertBox.classList.remove("d-none");
        }

        this.reset();
    });
}