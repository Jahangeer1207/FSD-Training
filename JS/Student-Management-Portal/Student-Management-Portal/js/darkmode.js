/* ==========================================
   CVR College of Engineering
   Dark Mode JS
========================================== */

// ================================
// GET SAVED THEME
// ================================

const theme = localStorage.getItem("theme");

if (theme === "dark") {
    document.body.classList.add("dark-mode");
}

// ================================
// CREATE TOGGLE BUTTON (if not exists)
// ================================

const existingBtn = document.getElementById("themeBtn");

if (existingBtn) {

    existingBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        // Save theme
        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");

        } else {

            localStorage.setItem("theme", "light");

        }

    });

}

// ================================
// OPTIONAL: AUTO APPLY BOOTSTRAP DARK FIXES
// ================================

function applyDarkStyles() {

    const isDark =
        document.body.classList.contains("dark-mode");

    const cards =
        document.querySelectorAll(".card");

    const navbar =
        document.querySelector(".navbar");

    const tables =
        document.querySelectorAll(".table");

    if (isDark) {

        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "#ffffff";

        // Cards
        cards.forEach(card => {
            card.style.backgroundColor = "#1e1e1e";
            card.style.color = "#ffffff";
        });

        // Navbar
        if (navbar) {
            navbar.classList.remove("bg-primary");
            navbar.classList.add("bg-dark");
        }

        // Tables
        tables.forEach(table => {
            table.classList.add("table-dark");
        });

    } else {

        document.body.style.backgroundColor = "";
        document.body.style.color = "";

        cards.forEach(card => {
            card.style.backgroundColor = "";
            card.style.color = "";
        });

        if (navbar) {
            navbar.classList.add("bg-primary");
            navbar.classList.remove("bg-dark");
        }

        tables.forEach(table => {
            table.classList.remove("table-dark");
        });
    }
}

// Run once on load
applyDarkStyles();

// Run on toggle
if (existingBtn) {
    existingBtn.addEventListener("click", applyDarkStyles);
}