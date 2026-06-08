/* ==========================================
   CVR College - Student Dashboard CRUD
========================================== */

let students = JSON.parse(localStorage.getItem("students")) || [];

// ================= LOAD TABLE =================
function loadStudents(data = students) {

    const table = document.getElementById("studentTable");
    table.innerHTML = "";

    data.forEach((s, index) => {

        table.innerHTML += `
        <tr>
            <td>${s.rollNumber}</td>
            <td>${s.fullName}</td>
            <td>${s.branch}</td>
            <td>${s.email}</td>
            <td>${s.attendance}%</td>

            <td>
                <button class="btn btn-info btn-sm" onclick="viewStudent(${index})">View</button>
                <button class="btn btn-warning btn-sm" onclick="editStudent(${index})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteStudent(${index})">Delete</button>
            </td>
        </tr>
        `;
    });

    document.getElementById("totalStudents").innerText = students.length;
}

loadStudents();

// ================= SAVE STUDENT =================
function saveStudent() {

    const name = document.getElementById("addName").value;
    const roll = document.getElementById("addRoll").value;
    const branch = document.getElementById("addBranch").value;
    const email = document.getElementById("addEmail").value;
    const attendance = document.getElementById("addAttendance").value;

    if (!name || !roll) {
        alert("Name and Roll Number are required!");
        return;
    }

    const student = {
        fullName: name,
        rollNumber: roll,
        branch: branch,
        email: email,
        attendance: attendance || 0
    };

    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    // FORCE CLOSE MODAL (SAFE METHOD)
    const modalElement = document.getElementById("addStudentModal");
    const modal = bootstrap.Modal.getOrCreateInstance(modalElement);
    modal.hide();

    // RESET FORM
    document.getElementById("addName").value = "";
    document.getElementById("addRoll").value = "";
    document.getElementById("addBranch").value = "";
    document.getElementById("addEmail").value = "";
    document.getElementById("addAttendance").value = "";

    loadStudents();

    alert("Student Added Successfully!");
}
// ================= VIEW =================
function viewStudent(index) {

    const s = students[index];

    alert(
        `STUDENT DETAILS\n\n` +
        `Name: ${s.fullName}\n` +
        `Roll: ${s.rollNumber}\n` +
        `Branch: ${s.branch}\n` +
        `Email: ${s.email}\n` +
        `Attendance: ${s.attendance}%`
    );
}

// ================= EDIT =================
function editStudent(index) {

    const s = students[index];

    const name = prompt("Edit Name", s.fullName);
    const branch = prompt("Edit Branch", s.branch);
    const email = prompt("Edit Email", s.email);
    const attendance = prompt("Edit Attendance", s.attendance);

    students[index] = {
        ...s,
        fullName: name,
        branch: branch,
        email: email,
        attendance: attendance
    };

    localStorage.setItem("students", JSON.stringify(students));

    loadStudents();

    alert("Student Updated!");
}

// ================= DELETE =================
function deleteStudent(index) {

    if (!confirm("Are you sure you want to delete?")) return;

    students.splice(index, 1);

    localStorage.setItem("students", JSON.stringify(students));

    loadStudents();

    alert("Student Deleted!");
}

// ================= SEARCH =================
document.getElementById("searchInput").addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    const filtered = students.filter(s =>
        s.fullName.toLowerCase().includes(value) ||
        s.rollNumber.toLowerCase().includes(value) ||
        s.branch.toLowerCase().includes(value)
    );

    loadStudents(filtered);
});