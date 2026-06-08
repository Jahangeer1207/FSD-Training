
/* ==========================================
   CVR College of Engineering
   Student Registration JS
========================================== */

// -------------------------------
// Bootstrap Validation
// -------------------------------

(() => {

    'use strict';

    const forms =
        document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(form => {

        form.addEventListener('submit', function (event) {

            if (!form.checkValidity()) {

                event.preventDefault();
                event.stopPropagation();

            }

            form.classList.add('was-validated');

        }, false);

    });

})();


// -------------------------------
// Photo Preview
// -------------------------------

const photoInput =
    document.getElementById('photo');

const previewImage =
    document.getElementById('previewImage');

if (photoInput) {

    photoInput.addEventListener('change', function () {

        const file = this.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function (e) {

            previewImage.src =
                e.target.result;

            previewImage.style.display =
                "block";

        };

        reader.readAsDataURL(file);

    });

}


// -------------------------------
// Registration Form Submission
// -------------------------------

const registerForm =
    document.getElementById('registerForm');

if (registerForm) {

    registerForm.addEventListener(
        'submit',
        function (e) {

            e.preventDefault();

            if (!registerForm.checkValidity()) {
                return;
            }

            // Get existing students

            let students =
                JSON.parse(
                    localStorage.getItem('students')
                ) || [];

            // Get values

            const fullName =
                document.getElementById('fullName')
                .value.trim();

            const rollNumber =
                document.getElementById('rollNumber')
                .value.trim();

            const email =
                document.getElementById('email')
                .value.trim().toLowerCase();

            const password =
                document.getElementById('password')
                .value;

            const mobile =
                document.getElementById('mobile')
                .value.trim();

            const branch =
                document.getElementById('branch')
                .value;

            const dob =
                document.getElementById('dob')
                .value;

            const address =
                document.getElementById('address')
                .value.trim();

            const gender =
                document.querySelector(
                    'input[name="gender"]:checked'
                )?.value || '';

            const photo =
                previewImage.src || '';

            // -----------------------
            // Duplicate Email Check
            // -----------------------

            const emailExists =
                students.some(
                    student =>
                    student.email === email
                );

            if (emailExists) {

                alert(
                    "Email already registered!"
                );

                return;

            }

            // -----------------------
            // Duplicate Roll Check
            // -----------------------

            const rollExists =
                students.some(
                    student =>
                    student.rollNumber === rollNumber
                );

            if (rollExists) {

                alert(
                    "Roll Number already exists!"
                );

                return;

            }

            // -----------------------
            // Create Student Object
            // -----------------------

            const student = {

                id: Date.now(),

                fullName,
                rollNumber,
                email,
                password,
                mobile,
                gender,
                branch,
                dob,
                address,
                photo,

                attendance: 100,

                status: "Active"

            };

            // -----------------------
            // Save Student
            // -----------------------

            students.push(student);

            localStorage.setItem(
                "students",
                JSON.stringify(students)
            );

            // -----------------------
            // Success
            // -----------------------

            alert(
                "Registration Successful!\nPlease Login."
            );

            registerForm.reset();

            previewImage.src = "";
            previewImage.style.display =
                "none";

            // Redirect Home

            window.location.href =
                "index.html";

        }

    );

}

