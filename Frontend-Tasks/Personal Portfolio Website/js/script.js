// Portfolio Website

console.log("Portfolio Website Loaded Successfully");

// Smooth Welcome Message
window.addEventListener("load", () => {
    console.log("Welcome to Mohammad Jahangeer's Portfolio");
});

// Contact Form
const form = document.querySelector("form");

if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Thank you for contacting me!");
        form.reset();
    });
}