const form = document.getElementById("studentForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const roll = document.getElementById("roll").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const gender = document.getElementById("gender").value;
  const branch = document.getElementById("branch").value;
  const dob = document.getElementById("dob").value;
  const address = document.getElementById("address").value.trim();
  const attendance = document.getElementById("attendance").value;
  const photo = document.getElementById("photo").files[0];

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const terms = document.getElementById("terms").checked;
  const message = document.getElementById("message");

  message.innerHTML = "";

  // Terms Validation
  if (!terms) {
    message.innerHTML =
      '<div class="alert alert-danger">Accept Terms & Conditions</div>';
    return;
  }

  // Mobile Validation
  if (!/^\d{10}$/.test(mobile)) {
    message.innerHTML =
      '<div class="alert alert-danger">Mobile number must be exactly 10 digits</div>';
    return;
  }

  // Password Validation
  if (password.length < 6) {
    message.innerHTML =
      '<div class="alert alert-danger">Password must be at least 6 characters</div>';
    return;
  }

  // Confirm Password Validation
  if (password !== confirmPassword) {
    message.innerHTML =
      '<div class="alert alert-danger">Passwords do not match</div>';
    return;
  }

  let students = JSON.parse(localStorage.getItem("students")) || [];

  // Duplicate Roll Number Check
  const duplicate = students.find((student) => student.roll === roll);

  if (duplicate) {
    message.innerHTML =
      '<div class="alert alert-danger">Roll Number Already Exists</div>';
    return;
  }

  const reader = new FileReader();

  reader.onload = function () {
    const student = {
      id: Date.now(),

      name,
      roll,
      email,
      mobile,
      gender,
      branch,
      dob,
      address,
      attendance,

      // Save Password
      password: btoa(password),

      placement: Math.random() > 0.5 ? "Placed" : "Not Placed",

      photo: reader.result,
    };

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    message.innerHTML =
      '<div class="alert alert-success">Student Registered Successfully</div>';

    form.reset();

    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);
  };

  if (photo) {
    reader.readAsDataURL(photo);
  } else {
    message.innerHTML =
      '<div class="alert alert-danger">Please upload a photo</div>';
  }
});
