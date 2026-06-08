document
  .getElementById("studentLoginForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const roll = document.getElementById("roll").value;

    const password = document.getElementById("password").value;

    const students = JSON.parse(localStorage.getItem("students")) || [];

    const student = students.find(
      (s) => s.roll === roll && s.password === password,
    );

    if (student) {
      localStorage.setItem("loggedStudent", student.id);

      window.location.href = "profile.html?id=" + student.id;
    } else {
      document.getElementById("msg").innerHTML = `
<div class="alert alert-danger">
Invalid Roll Number or Password
</div>
`;
    }
  });
