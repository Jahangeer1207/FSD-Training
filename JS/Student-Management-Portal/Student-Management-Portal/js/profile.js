/* ==========================================
   CVR College of Engineering
   Student Profile JS
========================================== */

// ================================
// SESSION PROTECTION
// ================================

const isLoggedIn =
    sessionStorage.getItem("loggedIn");

if (isLoggedIn !== "true") {

    alert("Please login first to access profile.");

    window.location.href = "index.html";

}

// ================================
// GET CURRENT STUDENT
// ================================

const student =
    JSON.parse(
        sessionStorage.getItem("currentStudent")
    );

// If no student found
if (!student) {

    alert("Session expired. Please login again.");

    window.location.href = "index.html";

}

// ================================
// FILL PROFILE DATA
// ================================

document.getElementById("profileName").textContent =
    student.fullName || "N/A";

document.getElementById("profileRoll").textContent =
    student.rollNumber || "N/A";

document.getElementById("profileBranch").textContent =
    student.branch || "N/A";

document.getElementById("profileEmail").textContent =
    student.email || "N/A";

document.getElementById("profileMobile").textContent =
    student.mobile || "N/A";

document.getElementById("profileDOB").textContent =
    student.dob || "N/A";

document.getElementById("profileAddress").textContent =
    student.address || "N/A";

// ================================
// ID CARD DATA
// ================================

document.getElementById("idName").textContent =
    student.fullName || "N/A";

document.getElementById("idRoll").textContent =
    student.rollNumber || "N/A";

document.getElementById("idBranch").textContent =
    student.branch || "N/A";

// ================================
// PROFILE IMAGE HANDLING
// ================================

const profileImg =
    document.getElementById("profileImage");

const idImg =
    document.getElementById("idImage");

// If user uploaded photo exists
if (student.photo && student.photo !== "") {

    profileImg.src = student.photo;
    idImg.src = student.photo;

} else {

    // fallback image
    profileImg.src = "https://i.pravatar.cc/400";
    idImg.src = "https://i.pravatar.cc/120";

}

// ================================
// OPTIONAL LOG
// ================================

console.log(
    "Profile loaded for:",
    student.fullName
);