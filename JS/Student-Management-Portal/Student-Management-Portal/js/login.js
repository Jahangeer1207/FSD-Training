document
  .getElementById("studentLoginForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const roll = document.getElementById("roll").value.trim();
    const password = document.getElementById("password").value;

    const students = JSON.parse(localStorage.getItem("students")) || [];

    const student = students.find(
      (s) => s.roll === roll && s.password === btoa(password),
    );
    if (roll === "admin" && password === "admin123") {
      localStorage.setItem("isLoggedIn", "true");

      window.location.href = "dashboard.html";
    }
    if (student) {
      // Store logged in student
      localStorage.setItem("loggedStudent", JSON.stringify(student));

      localStorage.setItem("studentLoggedIn", "true");

      window.location.href = "profile.html?id=" + student.id;
    } else {
      document.getElementById("msg").innerHTML = `
    <div class="alert alert-danger">
      Invalid Roll Number or Password
    </div>
  `;
    }
  });
