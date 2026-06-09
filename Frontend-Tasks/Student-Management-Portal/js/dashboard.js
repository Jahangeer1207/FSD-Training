let students = JSON.parse(localStorage.getItem("students")) || [];

const table = document.getElementById("studentTable");

// Check Login

const isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn !== "true") {
  alert("Please login first!");

  window.location.href = "login.html";
}

function loadDashboard() {
  table.innerHTML = "";

  let present = 0;
  let absent = 0;
  let placed = 0;

  students.forEach((student) => {
    if (student.attendance === "Present") present++;

    if (student.attendance === "Absent") absent++;

    if (student.placement === "Placed") placed++;

    table.innerHTML += `

<tr>

<td>
<img src="${student.photo}"
width="60"
height="60"
class="rounded-circle">
</td>

<td>${student.roll}</td>

<td>${student.name}</td>

<td>${student.branch}</td>

<td>

<span class="badge ${
      student.attendance === "Present" ? "bg-success" : "bg-danger"
    }">

${student.attendance}

</span>

</td>

<td>

<span class="badge ${
      student.placement === "Placed" ? "bg-primary" : "bg-secondary"
    }">

${student.placement}

</span>

</td>

<td>

<a href="profile.html?id=${student.id}"
class="btn btn-info btn-sm">

View

</a>

<button
class="btn btn-warning btn-sm"
onclick="editStudent(${student.id})">

Edit

</button>

<button
class="btn btn-danger btn-sm"
onclick="deleteStudent(${student.id})">

Delete

</button>

</td>

</tr>

`;
  });

  document.getElementById("totalStudents").innerText = students.length;

  document.getElementById("presentStudents").innerText = present;

  document.getElementById("absentStudents").innerText = absent;

  document.getElementById("placements").innerText = placed;
}

loadDashboard();

function deleteStudent(id) {
  if (confirm("Delete Student?")) {
    students = students.filter((student) => student.id !== id);

    localStorage.setItem("students", JSON.stringify(students));

    loadDashboard();
  }
}

function editStudent(id) {
  const student = students.find((student) => student.id === id);

  document.getElementById("editId").value = student.id;

  document.getElementById("editName").value = student.name;

  document.getElementById("editEmail").value = student.email;

  document.getElementById("editBranch").value = student.branch;

  document.getElementById("editAttendance").value = student.attendance;

  const modal = new bootstrap.Modal(document.getElementById("editModal"));

  modal.show();
}

function saveStudent() {
  const id = Number(document.getElementById("editId").value);

  const student = students.find((student) => student.id === id);

  student.name = document.getElementById("editName").value;

  student.email = document.getElementById("editEmail").value;

  student.branch = document.getElementById("editBranch").value;

  student.attendance = document.getElementById("editAttendance").value;

  localStorage.setItem("students", JSON.stringify(students));

  loadDashboard();

  bootstrap.Modal.getInstance(document.getElementById("editModal")).hide();
}

document.getElementById("search").addEventListener("keyup", function () {
  const value = this.value.toLowerCase();

  const rows = document.querySelectorAll("#studentTable tr");

  rows.forEach((row) => {
    row.style.display = row.innerText.toLowerCase().includes(value)
      ? ""
      : "none";
  });
});

function logout() {
  localStorage.removeItem("isLoggedIn");

  window.location.href = "login.html";
}
