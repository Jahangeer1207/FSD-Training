// ==========================================
// CVR Course Registration Portal
// JavaScript File
// ==========================================

console.log("CVR Course Registration Portal Loaded Successfully");

// Welcome Message
window.addEventListener("load", () => {
    console.log("Welcome to CVR College of Engineering");
});

// Registration Form Success Alert
const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {
    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const successAlert = document.getElementById("successAlert");

        if (successAlert) {
            successAlert.classList.remove("d-none");
        }

        this.reset();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Contact Form Success Alert
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const contactAlert = document.getElementById("contactAlert");

        if (contactAlert) {
            contactAlert.classList.remove("d-none");
        }

        this.reset();
    });
}

// Dynamic Footer Year
const yearElements = document.querySelectorAll(".current-year");

yearElements.forEach(element => {
    element.textContent = new Date().getFullYear();
});

// Simple Course Card Hover Effect
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transition = "0.3s ease";
    });
});

// Back to Top Button Functionality (Optional)
const backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}