/* ==========================================
   CVR College of Engineering
   Contact Form JS
========================================== */

// ================================
// GET FORM
// ================================

const contactForm =
    document.querySelector("form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        // ================================
        // GET VALUES
        // ================================

        const name =
            contactForm.querySelector("input[type='text']").value.trim();

        const email =
            contactForm.querySelector("input[type='email']").value.trim();

        const subject =
            contactForm.querySelectorAll("input[type='text']")[1].value.trim();

        const message =
            contactForm.querySelector("textarea").value.trim();

        // ================================
        // VALIDATION
        // ================================

        if (!name || !email || !subject || !message) {

            alert("Please fill all fields!");

            return;

        }

        // Email format check
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address!");

            return;

        }

        // ================================
        // CREATE MESSAGE OBJECT
        // ================================

        const contactMessage = {

            id: Date.now(),

            name,
            email,
            subject,
            message,

            date: new Date().toLocaleString()

        };

        // ================================
        // STORE IN LOCAL STORAGE
        // ================================

        let messages =
            JSON.parse(
                localStorage.getItem("contactMessages")
            ) || [];

        messages.push(contactMessage);

        localStorage.setItem(
            "contactMessages",
            JSON.stringify(messages)
        );

        // ================================
        // SUCCESS MESSAGE
        // ================================

        alert("Message sent successfully!");

        // Reset form
        contactForm.reset();

        console.log("New Contact Message:", contactMessage);

    });

}