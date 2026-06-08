const params = new URLSearchParams(window.location.search);

const studentId = Number(params.get("id"));

const students = JSON.parse(localStorage.getItem("students")) || [];

const student = students.find((s) => s.id === studentId);
if (localStorage.getItem("studentLoggedIn") !== "true") {
  window.location.href = "login.html";
}

if (student) {
  document.getElementById("profilePhoto").src = student.photo;

  document.getElementById("name").innerText = student.name;

  document.getElementById("roll").innerText = student.roll;

  document.getElementById("email").innerText = student.email;

  document.getElementById("mobile").innerText = student.mobile;

  document.getElementById("gender").innerText = student.gender;

  document.getElementById("branch").innerText = student.branch;

  document.getElementById("dob").innerText = student.dob;

  document.getElementById("attendance").innerHTML =
    student.attendance === "Present"
      ? '<span class="badge bg-success">Present</span>'
      : '<span class="badge bg-danger">Absent</span>';

  document.getElementById("placement").innerHTML =
    student.placement === "Placed"
      ? '<span class="badge bg-primary">Placed</span>'
      : '<span class="badge bg-secondary">Not Placed</span>';

  document.getElementById("address").innerText = student.address;

  document.getElementById("idPhoto").src = student.photo;

  document.getElementById("idName").innerText = student.name;

  document.getElementById("idRoll").innerText = student.roll;

  document.getElementById("idBranch").innerText = student.branch;
} else {
  document.body.innerHTML = `
<div class="container py-5">
<div class="alert alert-danger">
Student Not Found
</div>
</div>
`;
}

function printIDCard() {
  const content = document.getElementById("idCard").innerHTML;

  const printWindow = window.open("", "", "width=600,height=600");

  printWindow.document.write(`

<html>

<head>

<title>ID Card</title>

<link rel="stylesheet"
href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">

</head>

<body class="p-4">

<div class="card border-primary">

${content}

</div>

</body>

</html>

`);

  printWindow.document.close();

  printWindow.print();
}
function studentLogout() {
  localStorage.removeItem("studentLoggedIn");
  localStorage.removeItem("loggedStudent");

  window.location.href = "student-login.html";
}
