
/* ==========================================
   CVR College of Engineering
   Student Login JS
========================================== */

// -----------------------------
// Login Button
// -----------------------------

const loginButton =
    document.getElementById("loginButton");

if (loginButton) {

    loginButton.addEventListener("click", () => {

        const email =
            document.getElementById("loginEmail")
            .value
            .trim()
            .toLowerCase();

        const password =
            document.getElementById("loginPassword")
            .value;

        // Validation

        if (!email || !password) {

            alert(
                "Please enter email and password."
            );

            return;
        }

        // Get students

        const students =
            JSON.parse(
                localStorage.getItem("students")
            ) || [];

        // No registration found

        if (students.length === 0) {

            alert(
                "No registered students found. Please register first."
            );

            return;
        }

        // Find matching student

        const currentStudent =
            students.find(student =>

                student.email === email &&
                student.password === password

            );

        // Login Success

        if (currentStudent) {

            sessionStorage.setItem(
                "loggedIn",
                "true"
            );

            sessionStorage.setItem(
                "currentStudent",
                JSON.stringify(currentStudent)
            );

            alert(
                `Welcome ${currentStudent.fullName}`
            );

            window.location.href =
                "dashboard.html";

        }

        // Login Failed

        else {

            alert(
                "Invalid Email or Password"
            );

        }

    });

}


// -----------------------------
// Utility Function
// -----------------------------

function isLoggedIn() {

    return (
        sessionStorage.getItem("loggedIn")
        === "true"
    );

}


// -----------------------------
// Redirect If Already Logged In
// -----------------------------

if (
    window.location.pathname.includes("index.html")
) {

    if (isLoggedIn()) {

        console.log(
            "User already logged in"
        );

    }

}

