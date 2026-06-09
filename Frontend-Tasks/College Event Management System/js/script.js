document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       REGISTRATION FORM
    ========================= */

    const registrationForm =
        document.getElementById("registrationForm");

    if (registrationForm) {

        registrationForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const name =
                document.getElementById("studentName").value.trim();

            const roll =
                document.getElementById("rollNumber").value.trim();

            const email =
                document.getElementById("studentEmail").value.trim();

            const mobile =
                document.getElementById("mobileNumber").value.trim();

            const emailRegex =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            const mobileRegex =
                /^[6-9]\d{9}$/;

            if (name === "") {
                alert("Please enter your name");
                return;
            }

            if (name.length < 3) {
                alert("Name must contain at least 3 characters");
                return;
            }

            if (roll === "") {
                alert("Please enter roll number");
                return;
            }

            if (!emailRegex.test(email)) {
                alert("Please enter valid email");
                return;
            }

            if (!mobileRegex.test(mobile)) {
                alert("Enter valid 10 digit mobile number");
                return;
            }

            const alertBox =
                document.getElementById("successAlert");

            if (alertBox) {
                alertBox.classList.remove("d-none");
                alertBox.innerHTML =
                    "✅ Registration Successful!";
            }

            registrationForm.reset();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =========================
       CONTACT FORM
    ========================= */

    const contactForm =
        document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const name =
                document.getElementById("contactName").value.trim();

            const email =
                document.getElementById("contactEmail").value.trim();

            const subject =
                document.getElementById("contactSubject").value.trim();

            const message =
                document.getElementById("contactMessage").value.trim();

            const emailRegex =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (name === "") {
                alert("Please enter your name");
                return;
            }

            if (name.length < 3) {
                alert("Name must contain at least 3 characters");
                return;
            }

            if (!emailRegex.test(email)) {
                alert("Please enter valid email");
                return;
            }

            if (subject.length < 3) {
                alert("Subject is too short");
                return;
            }

            if (message.length < 10) {
                alert("Message should contain at least 10 characters");
                return;
            }

            const alertBox =
                document.getElementById("contactAlert");

            if (alertBox) {
                alertBox.classList.remove("d-none");
                alertBox.innerHTML =
                    "✅ Message Sent Successfully!";
            }

            contactForm.reset();

        });

    }


    /* =========================
       CARD HOVER EFFECT
    ========================= */

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-8px)";
            card.style.transition = "0.3s";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });

    });


    /* =========================
       GALLERY LIGHTBOX
    ========================= */

    const images = document.querySelectorAll(".card img");

    images.forEach(img => {

        img.style.cursor = "pointer";

        img.addEventListener("click", () => {

            const overlay =
                document.createElement("div");

            overlay.style.position = "fixed";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.background = "rgba(0,0,0,0.9)";
            overlay.style.display = "flex";
            overlay.style.alignItems = "center";
            overlay.style.justifyContent = "center";
            overlay.style.zIndex = "9999";

            overlay.innerHTML = `
                <img src="${img.src}"
                style="
                max-width:90%;
                max-height:90%;
                border-radius:10px;">
            `;

            overlay.onclick = () => overlay.remove();

            document.body.appendChild(overlay);

        });

    });


    /* =========================
       BACK TO TOP BUTTON
    ========================= */

    const btn =
        document.createElement("button");

    btn.innerHTML = "↑";

    btn.className =
        "btn btn-primary";

    btn.style.position = "fixed";
    btn.style.bottom = "20px";
    btn.style.right = "20px";
    btn.style.display = "none";
    btn.style.zIndex = "999";

    document.body.appendChild(btn);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }

    });

    btn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});