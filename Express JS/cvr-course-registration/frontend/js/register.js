const courseSelect = document.getElementById("course");
const form = document.getElementById("registrationForm");
const successAlert = document.getElementById("successAlert");

// Load courses into dropdown
async function loadCourses() {
    try {
        const response = await fetch("http://localhost:5000/courses");
        const courses = await response.json();

        courses.forEach(course => {
            const option = document.createElement("option");
            option.value = course.name;
            option.textContent = course.name;
            courseSelect.appendChild(option);
        });
    } catch (error) {
        console.error("Error loading courses:", error);
    }
}

loadCourses();

// Submit registration
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const resumeInput = document.getElementById("resume");

    const student = {
        studentName: document.getElementById("studentName").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        course: document.getElementById("course").value,
        qualification: document.getElementById("qualification").value,
        address: document.getElementById("address").value,

        // Store only the selected filename
        resume: resumeInput.files.length
            ? resumeInput.files[0].name
            : ""
    };

    try {
        const response = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        });

        const result = await response.json();

        if (result.success) {
    // Show success alert
    successAlert.classList.remove("d-none");

    // Show Bootstrap modal
    const successModal = new bootstrap.Modal(
        document.getElementById("successModal")
    );
    successModal.show();

    // Reset the form
    form.reset();

    // Hide the alert after 3 seconds
    setTimeout(() => {
        successAlert.classList.add("d-none");
    }, 3000);
} else {
    alert("Registration failed.");
}

    } catch (error) {
        console.error(error);
        alert("Server error.");
    }
});